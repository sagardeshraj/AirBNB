import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex flex-grow-1 pt-3">
            <input className="form-control me-2 flex-grow-1" type="search" placeholder="Start your search" aria-label="Search" />
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <a className="nav-link" href="/">
                Become a host
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{paddingLeft:"12px"}}
                
              >
                <FontAwesomeIcon icon={faGlobe} />
              </a>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  English (IN)
                </a>
                <a className="dropdown-item" href="/">
                  INR
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link user pt-0 ps-2" href="/">
                <FontAwesomeIcon icon={faUserCircle} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
