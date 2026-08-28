import { NavLink, Outlet } from 'react-router-dom';

const navLinkClassName = ({ isActive }) => (isActive ? 'active' : undefined);

const Layout = () => {
  return (
    <div className="App">
      <header className="site-header">
        <div className="site-header-inner">
          <h1>Dr. Endawoke Yizengaw</h1>
          <p className="site-subtitle">
            Research interests include space weather, RF interference, and RF scintillation
          </p>
          <nav className="site-nav">
            <ul>
              <li><NavLink to="/research" className={navLinkClassName}>Research</NavLink></li>
              <li><NavLink to="/media" className={navLinkClassName}>Media</NavLink></li>
              <li><NavLink to="/awards" className={navLinkClassName}>Awards</NavLink></li>
              <li><NavLink to="/travel" className={navLinkClassName}>Travel</NavLink></li>
              <li><NavLink to="/amber" className={navLinkClassName}>AMBER</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Dr. Endawoke Yizengaw</p>
        <p className="site-credit">Developed by Yoseph Endawoke</p>
      </footer>
    </div>
  );
};

export default Layout;
