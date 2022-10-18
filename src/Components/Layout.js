import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (<>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="create" className="nav-link">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link to="cards" className="nav-link">
              Cards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet />
    </>
  );
};

export default Layout;
