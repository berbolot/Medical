import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import instagramIcon from "../../images/instagram (1).svg";

const Footer = () => {

  return (
    <div className="footer">

      <div className="footer-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3 pe-sm-5">
            <FontAwesomeIcon className="logo" icon={faHeartPulse} />
            <FontAwesomeIcon className="logo" icon={faHeartPulse} />
            <FontAwesomeIcon className="logo" icon={faHeartPulse} />
            <FontAwesomeIcon className="logo" icon={faHeartPulse} />
              <p className="turkmed_text">
               <b>Turkmed</b> - это медицинский центр, который предоставляет лечение
                пациентов с помощью специализированного медицинского и
                медицинского персонала и медицинского оборудования.
              </p>
            </div>

            <div className="col-sm-6 col-lg-3">
              <h5>Адрес:</h5>
              <ul className="navbar-nav">
                  <Link className="link" to="https://2gis.kg/osh/firm/70000001036227468/72.797282%2C40.526886?m=72.796373%2C40.526676%2F17.7">
                  г. Ош, ул. Ленин 299
                  </Link>
                  <h5>Время работы:</h5>
                <span> Будние дни : 09:00 - 17:00 </span> 
                 <span> Суббота : 08:00 - 13:00</span>
                 <span> Воскресенье : выходной</span>
              </ul>
            </div>

            <div className="col-sm-6 col-lg-3">
              <h5>Услуги</h5>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="link" to="/service">
                    Кардиология
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/service">
                    Урология
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/service">
                    Неврология
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/service">
                    Ортопедия
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/service">
                    Гастроэнтерология
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/service">
                    Стоматология
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3">
              <h5>Контакты</h5>
              <div className="d-flex">
                <FontAwesomeIcon className="fa-icon" icon={faMapMarkerAlt} />
                <p>
                  329 Queensberry Street, North Melbourne VIC 3051, Австралия.
                </p>
              </div>
              <div className="d-flex align-items-top">
                <FontAwesomeIcon className="fa-icon" icon={faPhoneAlt} />
                <p>1900 654 321.</p>
              </div>
              <div className="d-flex align-items-top">
                <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
                <p>support@skola.com</p>
              </div>
              <div className="d-flex align-items-top">
                <a href="https://www.instagram.com/turkmed_osh/">
                  <img
                    src={instagramIcon}
                    style={{ width: "30px" }}
                    alt="instagam turkmed"
                  />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Footer;
