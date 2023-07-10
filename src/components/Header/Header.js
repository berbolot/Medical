import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import hamburger from "../../images/menu.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import frame1 from '../../images/Frame 1.png';

const Header = () => {



  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow">
      <div className="container">
        <Link className="link" to="/">
          <img className="logo" src={frame1} alt="frame" />
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
          <img className="hamburger" src={hamburger} alt="" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="link" to="/">
                Главная <div className="line"></div>
              </Link>

            </li>
            <li className="nav-item">
              <Link className="link" to="/services">
                Услуги <div className="line"></div>
              </Link>

            </li>
            <li className="nav-item">
              <Link className="link" to="/about">
                О нас <div className="line"></div>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="link" to="/galery">
                Галерея <div className="line"></div>
              </Link>
            </li><li className="nav-item">
              <Link className="link" to="/appointment">
                Запись на прием <div className="line"></div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/contact">
                Контакты  <div className="line"></div>
              </Link>

            </li>
            <li className="nav-item">
              {/* {
                        user.email ? 
                        <button onClick={logOut}>Logout</button> : 
                        <Link className="link" to="/login">Login</Link>
                     } */}
            </li>
            <li className="nav-item">
              {
                // user.email && <span>{user.displayName}</span>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
