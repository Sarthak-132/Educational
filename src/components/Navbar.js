import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {

   

  return (
    <>
      <nav id="Navbar"
        className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand mx-3"
            href="#Navbar"
            style={{ border: "2px solid rgb(22, 83, 91)", padding: "5px 10px" }}
          >
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "white" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link mx-3" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="#Working">
                  Working
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="#Service">
                  Service
                </a>
              </li>
              <div
                className={`form-check form-switch my-2 mx-3 text-${
                  props.mode === "light" ? "dark" : "light"
                }`} 
              >
                <input
                  className="form-check-input" 
                  onClick={props.toggleMode} 
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault" style={{cursor:"pointer"}}
                />
                <label
                  className="form-check-label" 
                  htmlFor="flexSwitchCheckDefault"
                  id="checkBox" style={{ cursor:"pointer",fontWeight:"bold"}}
                >
                 Mode
                </label>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
};
