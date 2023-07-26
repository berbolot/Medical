import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import scss from "./otzyv.module.scss";
import d2 from '../../images/d2.jpg'
import b1 from '../../images/b1.webp'
import d1 from '../../images/d1.webp'
import d3 from '../../images/d3.webp'

const Otzyv = () => {
  const sliderSettings = {
    infinite: true,
    prevArrow: (
      <div className={`${scss.slickBtnOwn} ${scss.slickPrev}`}>Prev</div>
    ),
    nextArrow: (
      <div className={`${scss.slickBtnOwn} ${scss.slickNext}`}>Next</div>
    ),
  };

  return (
    <div className={scss.otzyv}>
      <h4 className={scss.text}>Reviews</h4>
      <div className={scss.slider}>
        <Slider {...sliderSettings}>
          <div className={scss.border}>
            <div className={scss.padd}>
              <div className={scss.con1}>
                 <img className={scss.kname} src={d2} alt="" />
                <div className={scss.col}>
                  <h6 className={scss.name}>Meerim Moldokmatova</h6>
                  <span>19 июля 2022</span>
                </div>

                <div className={scss.star}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <h4>Одна из лучших клиник в городе!</h4>
              <span>
                Одна из лучших клиник в городе, была у Поповой Маргариты
                Вадимовны. Очень чуткая, профессионал своего дела! Сделала
                назначение, очень удобно, в клинике свой дневной стационар,
                медсестра сделала укол так,что я ничего не почувствовала. Теперь
                только к вам!
              </span>
            </div>
          </div>
          <div className={scss.border}>
            <div className={scss.padd}>
              <div className={scss.con1}>
              <img className={scss.kname} src={d1} alt="" />

                <div className={scss.col}>
                  <h6 className={scss.name}>Алия Нур</h6>
                  <span>21 сентября 2022</span>
                </div>

                <div className={scss.star}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <h4>Классная клиника</h4>
              <span>
                Классная клиника, водила ребенка к Сушкову- все объяснил,
                рассказал. Мы довольны! Только вот записываться надо заранее) А
                так молодцы, все на уровне от администрации до врачей, пожалуй,
                лучшие в городе!
              </span>
            </div>
          </div>
          <div className={scss.border}>
            <div className={scss.padd}>
              <div className={scss.con1}>
              <img className={scss.kname} src={b1} alt="" />

                <div className={scss.col}>
                  <h6 className={scss.name}>Syimyk Mitalipov</h6>
                  <span>22 августа 2022</span>
                </div>

                <div className={scss.star}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <h4>Отличная клиника</h4>
              <span>
              Лучшие
              </span>
            </div>
          </div>
          <div className={scss.border}>
            <div className={scss.padd}>
              <div className={scss.con1}>
              <img className={scss.kname} src={d3} alt="" />
                <div className={scss.col}>
                  <h6 className={scss.name}>AsilbekovaGul</h6>
                  <span>21 сентября 2022</span>
                </div>

                <div className={scss.star}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <h4>От всего сердца!</h4>
              <span>
              Хочу выразить ВАМ благодарность от всего сердца за ВАШЕ тепло, чуткость, доброту и профессионализм!
              </span>
            </div>
          </div>
        

          {/* Add more review slides as needed */}
        </Slider>
      </div>

      <div className={scss.our}>
           <h4>Our indicators</h4>
           <div className={scss.content}>
             <div className={scss.con}>
                <b>12</b>
                <p>лет успешной работы</p>
             </div>
             <div className={scss.con}>
                <b>1500</b>
                <p>Стационарных пациентов в год</p>
             </div>
             <div className={scss.con}>
                <b>300+</b>
                <p>Пациентов ежедневно посещают мед. центр</p>
             </div>
           </div>

           <div className={scss.content}>
             <div className={scss.con}>
                <b>150+</b>
                <p>Эндоскопических операций в месяц</p>
             </div>
             <div className={scss.con}>
                <b>20</b>
                <p>Нейрохирургических операций в месяц</p>
             </div>
             <div className={scss.con}>
                <b>150</b>
                <p>Штат клиники</p>
             </div>
           </div>

        </div>

    </div>
  );
};

export default Otzyv;
