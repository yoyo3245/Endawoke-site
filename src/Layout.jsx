import { NavLink, Outlet } from 'react-router-dom';

const navLinkClassName = ({ isActive }) => (isActive ? 'active' : undefined);

const Layout = () => {
  return (
    <div className="App">
      <header className="site-header">
        <div className="site-header-inner">
          <h1>Dr. Endawoke Yizengaw</h1>
          <p className="site-subtitle">
            Senior Scientist at The Aerospace Corporation
          </p>
          <p className="site-subtitle">
            <a href="mailto:endawokekassie@gmail.com">Contact Me</a>
          </p>
          <nav className="site-nav">
            <ul>
              <li><NavLink to="/research" className={navLinkClassName}>Research</NavLink></li>
              <li><NavLink to="/media" className={navLinkClassName}>Media</NavLink></li>
              <li><NavLink to="/awards" className={navLinkClassName}>Awards</NavLink></li>
              <li><NavLink to="/travel" className={navLinkClassName}>Travel</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Dr. Endawoke Yizengaw</p>
        <p className="site-credit">Site created by Yoseph Endawoke</p>
      </footer>
    </div>
  );
};

export default Layout;
