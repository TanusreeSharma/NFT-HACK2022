import React from 'react'
import { faBars, faSearch, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../Assets/img/logo.png'
import './Nav.css';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';


const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light pt-3 pb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div id="mainlogo d-flex">
              <img style={{ width: "40px", marginBottom: "10px" }} src={logo} />
              <span className='logoName'>Opensea</span>
            </div>
          </a>
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

          <ul className="navbar-nav mb-lg-0">
          <li className="nav-item dropdown nav-menu">
                <a
                  className="nav-link"
                  href=""
                  aria-expanded="false"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  role="button"
                >
                  <FontAwesomeIcon className='walletIcon' icon={faBars} />
                </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="/home1">Page1</a></li>
                    <li><a class="dropdown-item" href="/home2">Page2</a></li>
                  </ul>
              </li>
          </ul>
          
          <form className="d-flex searchForm">
              <input
                className="form-control shadow-none me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ position: 'relative' }}
              />
              <button className="btn searchBtn" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item nav-menu">
                <a className="nav-link" aria-current="page" href="/">
                  Explore
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li> */}
              <li className="nav-item nav-menu">
                <a
                  className="nav-link"
                  href="#"
                  aria-expanded="false"
                >
                  States
                </a>
                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      <span></span>
                    </a>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item nav-menu">
                <a
                  className="nav-link"
                  href=""
                  
                  aria-expanded="false"
                >
                  Resources
                </a>
                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      <span></span>
                    </a>
                  </li>
                </ul> */}
              </li>

              <li className="nav-item nav-menu">
                <a
                  className="nav-link"
                  href=""
                  aria-expanded="false"
                >
                  Create
                </a>
                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      <span></span>
                    </a>
                  </li>
                </ul> */}
              </li>

              <li className="nav-item dropdown nav-menu">
                <a
                  className="nav-link"
                  href=""
                  aria-expanded="false"
                >
                  <FontAwesomeIcon className='userIcon' icon={faUserCircle} />
                </a>
              </li>
              <li className="nav-item dropdown nav-menu">
                <a
                  className="nav-link"
                  href=""
                  aria-expanded="false"
                >
                  <FontAwesomeIcon className='walletIcon' icon={faWallet} />
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

