import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar fixed-top" style={{ background: "#505168" }}>
      <div class="container-fluid">
        <Link className="navbar-brand fs-3" to="/*">EVE</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ background: "#B3C0A4" }}
        >
          <div
            class="offcanvas-header"
            style={{ color: "#27233A", letterSpacing: "2px" }}
          >
            <Link to="/*" style={{textDecoration:"none", color: "#27233A"}}><h5 class="offcanvas-title fs-2" id="offcanvasNavbarLabel">
              EVE
            </h5></Link>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul
              class="navbar-nav justify-content-end flex-grow-1 pe-3 fs-4"
              style={{ color: "#27233A", letterSpacing: "1px" }}
            >
              <li class="nav-item">
                <Link className="nav-link" aria-current="page" to="/web">
                  Web Search
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li class="nav-item">
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
