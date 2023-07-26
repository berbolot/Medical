import React from 'react';
import icon1 from '../../images/feature-icon1.png'
import icon2 from '../../images/feature-icon2.png'
import icon3 from '../../images/feature-icon3.png'

const Feature = () => {
   return (
      <div className="feature">
         <div className="container">
            <div className="header-text text-center">
               <h3>Наши преимущества</h3>
               <p>Откройте для себя идеальную программу в нашей медицине.</p>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="feature-box">
                     <div className="icon shadow">
                        <img src={icon1} alt="" />
                     </div>
                     <h4>Онлайн-экстренная помощь</h4>
                     <p>Набор курсов по садоводству, <br /> фотографии и многому другому.</p>
                  </div>
               </div>
               <div className="col-md-4 my-5 my-md-0">
                  <div className="feature-box">
                     <div className="icon shadow icon2">
                        <img src={icon2} alt="" />
                     </div>
                     <h4>Сервис медикаментов</h4>
                     <p>Поиск знаний, которые помогут вам <br /> понять любую тему.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="feature-box">
                     <div className="icon shadow icon3">
                        <img src={icon3} alt="" />
                     </div>
                     <h4>24-часовая программа здоровья</h4>
                     <p>Эксперты предоставляют вам лучшую поддержку <br /> в отношении ваших потребностей.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Feature;