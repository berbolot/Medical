import React from 'react';
import about from '../../images/about.png'
import Feature from '../Feature/Feature';

const About = () => {
   return (
      <>
         <div className="about">
            <div className="about-bg">
               <div className="container-fluid px-0">
                  <div className="row justify-content-center align-items-center">
                     <div className="col-lg-6 mb-5 mb-lg-0">
                        <img className="img-fluid" src={about} alt="" />
                     </div>
                     <div className="col-lg-6">
                        <div className="text-box">
                           <h2>Мы специализируемся на медицинской диагностике</h2>
                           <p>Нашей целью является предоставление качественного медицинского ухода в вежливой, уважительной и сострадательной манере. Мы надеемся, что вы позволите нам заботиться о вас и стремиться быть первым и лучшим выбором для вашей семейной медицинской помощи</p>
                           <ul>
                              <li>Мы предоставляем пациентам лечение с помощью специализированного медицинского и медицинского персонала и медицинского оборудования.</li>
                              <li>Мы лечим различные заболевания, включая болезни почек, ортопедию, заболевания зубов, гастрит и сердечный приступ и т. д.</li>
                              <li>Врачи всегда готовы предоставить вам лучшее лечение.</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Feature></Feature>
      </>
   );
};

export default About;