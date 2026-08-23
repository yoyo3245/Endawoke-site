import { useState, useEffect } from 'react';

const ORCID_ID = '0000-0001-5772-3355';
const ORCID_WORKS_URL = `https://pub.orcid.org/v3.0/${ORCID_ID}/works`;
const YIZENGAW_PATTERN = /yizengaw/i;
const YIZENGAW_FALLBACK_NAME = 'Endawoke Yizengaw';

const SUFFIXES = new Set(['Jr', 'Sr', 'II', 'III', 'IV']);
const HYPHEN_CHARS = '-‐‑‒–—';
const HYPHEN = new RegExp(`[${HYPHEN_CHARS}]`);
const LEADING_SPACE_HYPHEN = new RegExp(`\\s+(?=[${HYPHEN_CHARS}])`, 'g');

function tokenToInitials(token) {
  const clean = token.replace(/[().]/g, '');
  if (!clean) return '';
  if (new RegExp(`^[A-Za-z]${HYPHEN.source}[A-Za-z]$`).test(clean)) {
    return clean.split(HYPHEN).map((ch) => `${ch.toUpperCase()}.`).join(' ');
  }
  if (/^[A-Z]{2,4}$/.test(clean)) {
    return clean.split('').map((ch) => `${ch}.`).join(' ');
  }
  return `${clean[0].toUpperCase()}.`;
}

// Parses a "credit-name" string (which ORCID gives in either "Family, Given"
// or natural "Given Family" order, inconsistently, depending on the source
// that imported it) into { family, initials } for AGU-style citation output.
function parseName(rawName) {
  const cleaned = rawName
    .replace(/\([^)]*\)/g, ' ') // drop parenthetical nicknames, e.g. "Yukitoshi (Toshi) Nishimura"
    .replace(LEADING_SPACE_HYPHEN, '') // "H. -L." -> "H.-L." so it tokenizes as one initial pair
    .replace(/\s+/g, ' ')
    .trim();

  if (cleaned.includes(',')) {
    const [familyPart, givenPart = ''] = cleaned.split(',').map((s) => s.trim());
    const givenTokens = givenPart.split(/\s+/).filter(Boolean);
    return { family: familyPart, initials: givenTokens.map(tokenToInitials).join(' ') };
  }

  const tokens = cleaned.split(/\s+/).filter(Boolean);
  if (tokens.length <= 1) {
    return { family: cleaned, initials: '' };
  }

  let family = [tokens[tokens.length - 1]];
  let given = tokens.slice(0, -1);
  if (given.length > 1 && SUFFIXES.has(family[0].replace(/\./g, ''))) {
    family = [given[given.length - 1], family[0]];
    given = given.slice(0, -1);
  }

  return { family: family.join(' '), initials: given.map(tokenToInitials).join(' ') };
}

// First author renders "Family, Initials."; every other author renders
// "Initials. Family" — matching standard AGU/JGR citation style.
function formatAuthor(rawName, isFirst) {
  const { family, initials } = parseName(rawName);
  if (!initials) return family;
  return isFirst ? `${family}, ${initials}` : `${initials} ${family}`;
}

function extractDoi(externalIds) {
  const ids = externalIds?.['external-id'] || [];
  const doi = ids.find((id) => id['external-id-type'] === 'doi');
  return doi ? doi['external-id-value'] : null;
}

function extractAuthors(contributors) {
  const list = contributors?.contributor || [];
  const names = list.map((c) => c['credit-name']?.value).filter(Boolean);
  return names.length > 0 ? names : [YIZENGAW_FALLBACK_NAME];
}

async function fetchAllPublications() {
  const summaryRes = await fetch(ORCID_WORKS_URL, { headers: { Accept: 'application/json' } });
  if (!summaryRes.ok) throw new Error(`ORCID API error: ${summaryRes.status}`);
  const summaryData = await summaryRes.json();

  const putCodes = (summaryData?.group || [])
    .map((group) => group['work-summary']?.[0]?.['put-code'])
    .filter(Boolean);

  if (putCodes.length === 0) return [];

  const bulkRes = await fetch(`${ORCID_WORKS_URL}/${putCodes.join(',')}`, {
    headers: { Accept: 'application/json' },
  });
  if (!bulkRes.ok) throw new Error(`ORCID API error: ${bulkRes.status}`);
  const bulkData = await bulkRes.json();

  return (bulkData?.bulk || [])
    .map((item) => item.work)
    .filter(Boolean)
    .map((work) => ({
      putCode: work['put-code'],
      title: work.title?.title?.value || 'Untitled',
      journal: work['journal-title']?.value || null,
      year: work['publication-date']?.year?.value
        ? parseInt(work['publication-date'].year.value, 10)
        : null,
      month: work['publication-date']?.month?.value
        ? parseInt(work['publication-date'].month.value, 10)
        : 0,
      doi: extractDoi(work['external-ids']),
      authors: extractAuthors(work.contributors),
    }))
    .filter((pub) => pub.year)
    .sort((a, b) => b.year - a.year || b.month - a.month);
}

function AuthorList({ authors }) {
  return authors.map((name, i) => {
    const isYizengaw = YIZENGAW_PATTERN.test(name);
    const display = formatAuthor(name, i === 0);
    let separator = '';
    if (i > 0) {
      separator = i === authors.length - 1 ? (authors.length > 2 ? ', and ' : ' and ') : ', ';
    }
    return (
      <span key={i}>
        {separator}
        {isYizengaw ? <b>{display}</b> : display}
      </span>
    );
  });
}

const ResearchPage = () => {
  const [publications, setPublications] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
  const [showAllPublications, setShowAllPublications] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetchAllPublications()
      .then((pubs) => {
        if (cancelled) return;
        setPublications(pubs);
        setStatus('ready');
      })
      .catch(() => {
        if (cancelled) return;
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="page-section">
      <h2>Research Publications</h2>
      <p className="page-section-note">
        Publications sync live from{' '}
        <a href={`https://orcid.org/${ORCID_ID}`} target="_blank" rel="noopener noreferrer">
          ORCID
        </a>.
      </p>

      {status === 'loading' && (
        <div className="loading-state">
          <span className="spinner" aria-hidden="true" />
          <span>Loading latest publications from ORCID…</span>
        </div>
      )}

      {status === 'error' && (
        <div className="empty-state">
          <p>
            Couldn&apos;t load the latest publications from ORCID right now. View the full record
            directly on{' '}
            <a href={`https://orcid.org/${ORCID_ID}`} target="_blank" rel="noopener noreferrer">
              orcid.org
            </a>.
          </p>
        </div>
      )}

      {status === 'ready' && (
        <>
          <div className={`publications-wrapper${showAllPublications ? ' expanded' : ''}`}>
            <ol reversed>
              {publications.map((pub) => (
                <li key={pub.putCode}>
                  <AuthorList authors={pub.authors} /> ({pub.year}), <b>{pub.title}</b>
                  {pub.journal ? `, ${pub.journal}` : ''}
                  {pub.doi && (
                    <>
                      {', doi:' + pub.doi + ' '}
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (View Publication)
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ol>
            {!showAllPublications && <div className="publications-fade" aria-hidden="true" />}
          </div>
          <button
            type="button"
            className="show-more-btn"
            onClick={() => setShowAllPublications((v) => !v)}
          >
            {showAllPublications ? 'Show fewer publications' : 'Show all publications'}
          </button>
        </>
      )}
    </section>
  );
};

export default ResearchPage;
