import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar fixed-top" style={{ backgroundColor: "#505168", height:"3.5rem", width: "100%" }}>
      <div className="container-fluid">
        <Link className="navbar-brand fs-3" to="/home">EVE</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ background: "#B3C0A4" }}
        >
          <div
            className="offcanvas-header"
            style={{ color: "#27233A", letterSpacing: "2px" }}
          >
            <Link to="/home" style={{textDecoration:"none", color: "#27233A"}}><h5 className="offcanvas-title fs-2" id="offcanvasNavbarLabel">
              EVE
            </h5></Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul
              className="navbar-nav justify-content-end flex-grow-1 pe-3 fs-4"
              style={{ color: "#27233A", letterSpacing: "1px" }}
            >
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/web">
                  Web Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/images">
                  Images
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
