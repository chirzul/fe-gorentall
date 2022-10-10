import React from 'react'
import './style.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="container">
      <header className="py-3">
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto my-auto">
                <Link to="/" className="nav-link navmenu">
                  Home
                </Link>
                <Link to="/vehicles" className="nav-link navmenu">
                  Vehicle Type
                </Link>
                <a className="nav-link navmenu" href="#">
                  History
                </a>
                <a className="nav-link navmenu" href="#">
                  About
                </a>
                <Link to="/login">
                  <button
                    type="button"
                    className="btn btn-outline-warning rounded-3 mx-2 my-2 navbtn"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    type="button"
                    className="btn btn-warning rounded-3 mx-2 my-2 navbtn"
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
