import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar fixed-top" style={{background: "#4A5759"}}>
      <div class="container-fluid">
        <Link className="navbar-brand" to="/web">
            
        </Link>
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
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              EVE
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
