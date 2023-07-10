import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import instagramIcon from '../../images/instagram (1).svg'

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer-bg">
            <div className="container">
               <div className="row">
                  <div className="col-sm-6 col-lg-3 pe-sm-5">
                     <h3 className="logo">Doctery</h3>
                     <p>Doctery - это медицинский центр, который предоставляет лечение пациентов с помощью специализированного медицинского и медицинского персонала и медицинского оборудования.</p>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                     <h5>Полезные ссылки</h5>
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link className="link" to="/home">Главная</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/services">Услуги</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/about">О нас</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/appointment">Запись на прием</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                     <h5>Услуги</h5>
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link className="link" to="/service">Кардиология</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/service">Урология</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/service">Неврология</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/service">Ортопедия</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/service">Гастроэнтерология</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/service">Стоматология</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                     <h5>Контакты</h5>
                     <div className="d-flex">
                        <FontAwesomeIcon className="fa-icon" icon={faMapMarkerAlt} />
                        <p>329 Queensberry Street, North Melbourne VIC 3051, Австралия.</p>
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
                    <a href='https://www.instagram.com/turkmed_osh/'><img src={instagramIcon} style={{width: '30px'}} alt='instagam turkmed'/></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;