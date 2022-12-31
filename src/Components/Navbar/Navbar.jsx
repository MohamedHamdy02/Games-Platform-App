import React from "react";
import img from "../../Images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar({ userData, logOut }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 mt-3 fiexd-top">
        <div className="container">
          <div className="d-flex align-item-center">
            <a href="#">
              <img className="img" src={img} alt="img" />
            </a>
            <a className="navbar-brand text-white" href="#">
              Gave Over
            </a>
          </div>
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
          <div
            className="collapse navbar-collapse ms-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/">
                <li className="nav-item">
                  <p
                    className="nav-link active text-white mb-0"
                    aria-current="page"
                  >
                    Home
                  </p>
                </li>
              </Link>
              <Link to="/all">
                <li className="nav-item">
                  <p className="nav-link mb-0" aria-current="page">
                    All
                  </p>
                </li>
              </Link>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platforms
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link to="browser">
                    <li>
                      <p className="dropdown-item">Browser</p>
                    </li>
                  </Link>
                  <Link to="pc">
                    <li>
                      <p className="dropdown-item">Pc</p>
                    </li>
                  </Link>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort-by
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link to="releaseDate">
                    <li>
                      <p className="dropdown-item">Release-Date</p>
                    </li>
                  </Link>
                  <Link to="popularity">
                    <li>
                      <p className="dropdown-item">Popularity</p>
                    </li>
                  </Link>
                  <Link to="alphabetical">
                    <li>
                      <p className="dropdown-item">Alphabetical</p>
                    </li>
                  </Link>
                  <Link to="relevance">
                    <li>
                      <p className="dropdown-item">Relevance</p>
                    </li>
                  </Link>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link to="racing">
                    <li>
                      <p className="dropdown-item">Racing</p>
                    </li>
                  </Link>
                  <Link to="sports">
                    <li>
                      <p className="dropdown-item">Sports</p>
                    </li>
                  </Link>
                  <Link to="social">
                    <li>
                      <p className="dropdown-item">Social</p>
                    </li>
                  </Link>
                  <Link to="shooter">
                    <li>
                      <p className="dropdown-item">Shooter</p>
                    </li>
                  </Link>
                  <Link to="openWorld">
                    <li>
                      <p className="dropdown-item">Open-World</p>
                    </li>
                  </Link>
                  <Link to="zombie">
                    <li>
                      <p className="dropdown-item">Zombie</p>
                    </li>
                  </Link>
                  <Link to="fantasy">
                    <li>
                      <p className="dropdown-item">Fantasy</p>
                    </li>
                  </Link>
                  <Link to="actionRpg">
                    <li>
                      <p className="dropdown-item">Action-Rpg</p>
                    </li>
                  </Link>
                  <Link to="action">
                    <li>
                      <p className="dropdown-item">Action</p>
                    </li>
                  </Link>
                  <Link to="flight">
                    <li>
                      <p className="dropdown-item">Flight</p>
                    </li>
                  </Link>
                  <Link to="battleRoyale">
                    <li>
                      <p className="dropdown-item">Battle-Royale</p>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
            {/* {userData ? (

            ) : (
              ""
            )} */}

            {/* {userData ? (
              ) : (
                <>
                  
                </>
              )} */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item m-2">
                <button className="btn btn-info" onClick={logOut}>Log Out</button>
              </li>
              <Link to="/register">
                <li className="nav-item m-2">
                  <button className="btn btn-info">Register</button>
                </li>
              </Link>
              <Link to="/login">
                <li className="nav-item m-2">
                  <button className="btn btn-info">Login</button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
