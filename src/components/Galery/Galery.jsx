import React, { useState } from 'react';
import med from "./img/med.png";
import gscss from "./galery.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


const Galery = () => {
  const [isArrowUp, setIsArrowUp] = useState(false);

  const toggleArrowDirection = () => {
    setIsArrowUp((prev) => !prev);
  };

  let arrowIcon;
  if (!isArrowUp) {
    arrowIcon = <FontAwesomeIcon icon={faChevronUp} rotation={180} />;
  } else {
    arrowIcon = <FontAwesomeIcon icon={faChevronUp} />;
  }

  return (
    <div className={gscss.galery_bg}>
      <div className={gscss.container}>
        <h1>Врачи</h1>
        <div onClick={toggleArrowDirection} className={gscss.sort}>
          <h4>Все</h4>
          <div>{arrowIcon}</div>
        </div>
{
  !isArrowUp? '' : <div className={gscss.modal}>
         <ul className={gscss.item}>
          <li>Все</li>
          <li>Невролог</li>
          <li>Ортопед-травматолог</li>
          <li>Нейрохирургия</li>
          <li>Скорая помощь</li>
          <li>Стационар</li>
          <li>Лаборатория</li>
          <li>Компьютерная Томография</li>
          <li>Рентген исследование</li>
          <li>УЗ диагностика</li>
          <li>ЛОР хирургия</li>
          <li>Артроскопия</li>
          <li>Лапароскопическая хирургия</li>
          <li>Дневной стационар</li>
          <li>Эндокринолог</li>
          <li>Терапевт</li>
          <li>ЛОР врач</li>
          <li>Офтальмолог</li>
          <li>Кардиолог</li>
          <li>Дерматовенеролог</li>
          <li>Гинеколог</li>
          <li>Эндовидеохирург</li>
          <li>Гастроэнтеролог</li>
          <li>Восточная медицина</li>
          <li>Фармацевт</li>
          <li>Реанимация</li>
         </ul>
     </div>
}

        <div className={gscss.content}>
          <div className={gscss.con}>
            <img src={med} alt="" />
            <div className={gscss.prof}>
              <h4>
                Байгазаков Асылбек Топчубаевич <h5>Опыт: 28 лет</h5>
              </h4>
              <div>Глав.врач. Эндовидеохирург. Доктор мед.наук. Профессор.</div>
            </div>
          </div>
          <div className={gscss.con}>
            <img src={med} alt="" />
            <div className={gscss.prof}>
              <h4>
                Байгазаков Асылбек Топчубаевич <h5>Опыт: 28 лет</h5>
              </h4>
              <div>Глав.врач. Эндовидеохирург. Доктор мед.наук. Профессор.</div>
            </div>
          </div>
          <div className={gscss.con}>
            <img src={med} alt="" />
            <div className={gscss.prof}>
              <h4>
                Байгазаков Асылбек Топчубаевич <h5>Опыт: 28 лет</h5>
              </h4>
              <div>Глав.врач. Эндовидеохирург. Доктор мед.наук. Профессор.</div>
            </div>
          </div>
          <div className={gscss.con}>
            <img src={med} alt="" />
            <div className={gscss.prof}>
              <h4>
                Байгазаков Асылбек Топчубаевич <h5>Опыт: 28 лет</h5>
              </h4>
              <div>Глав.врач. Эндовидеохирург. Доктор мед.наук. Профессор.</div>
            </div>
          </div>
          <div className={gscss.con}>
            <img src={med} alt="" />
            <div className={gscss.prof}>
              <h4>
                Байгазаков Асылбек Топчубаевич <h5>Опыт: 28 лет</h5>
              </h4>
              <div>Глав.врач. Эндовидеохирург. Доктор мед.наук. Профессор.</div>
            </div>
          </div>
          <div className={gscss.con}>
            <img src={med} alt="" />
            <div className={gscss.prof}>
              <h4>
                Байгазаков Асылбек Топчубаевич <h5>Опыт: 28 лет</h5>
              </h4>
              <div>Глав.врач. Эндовидеохирург. Доктор мед.наук. Профессор.</div>
            </div>
          </div>
          <div className={gscss.con}>
            <img src={med} alt="" />
            <div className={gscss.prof}>
              <h4>
                Байгазаков Асылбек Топчубаевич <h5>Опыт: 28 лет</h5>
              </h4>
              <div>Глав.врач. Эндовидеохирург. Доктор мед.наук. Профессор.</div>
            </div>
          </div>
          <div className={gscss.con}>
            <img src={med} alt="" />
            <div className={gscss.prof}>
              <h4>
                Байгазаков Асылбек Топчубаевич <h5>Опыт: 28 лет</h5>
              </h4>
              <div>Глав.врач. Эндовидеохирург. Доктор мед.наук. Профессор.</div>
            </div>
          </div>
          <div className={gscss.con}>
            <img src={med} alt="" />
            <div className={gscss.prof}>
              <h4>
                Байгазаков Асылбек Топчубаевич <h5>Опыт: 28 лет</h5>
              </h4>
              <div>Глав.врач. Эндовидеохирург. Доктор мед.наук. Профессор.</div>
            </div>
          </div>
          <div className={gscss.con}>
            <img src={med} alt="" />
            <div className={gscss.prof}>
              <h4>
                Байгазаков Асылбек Топчубаевич <h5>Опыт: 28 лет</h5>
              </h4>
              <div>Глав.врач. Эндовидеохирург. Доктор мед.наук. Профессор.</div>
            </div>
          </div>
          <div className={gscss.con}>
            <img src={med} alt="" />
            <div className={gscss.prof}>
              <h4>
                Байгазаков Асылбек Топчубаевич <h5>Опыт: 28 лет</h5>
              </h4>
              <div>Глав.врач. Эндовидеохирург. Доктор мед.наук. Профессор.</div>
            </div>
          </div>
          <div className={gscss.con}>
            <img src={med} alt="" />
            <div className={gscss.prof}>
              <h4>
                Байгазаков Асылбек Топчубаевич <h5>Опыт: 28 лет</h5>
              </h4>
              <div>Глав.врач. Эндовидеохирург. Доктор мед.наук. Профессор.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
