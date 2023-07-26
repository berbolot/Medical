import React from "react";
import { useEffect } from "react";
// import contact from '../../images/contact.png'

const Appointment = () => {
  useEffect(() => {
    const loadMap = () => {
      const ymaps = window.ymaps;

      ymaps.ready(() => {
        const map = new ymaps.Map("map", {
          center: [40.528608, 72.79949],
          zoom: 15,
        });

        const placemark = new ymaps.Placemark(
          [40.526808, 72.797199],
          {
            hintContent: "Кыргызско-турецкая международная клиника",
            balloonContent: "Кыргызско-турецкая международная клиника",
          },
          {
            preset: "islands#redIcon",
          }
        );

        map.geoObjects.add(placemark);
      });
    };

    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    script.async = true;
    script.onload = loadMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="contact appointment">
      <div className="contact-bg appointment-bg">
        <div className="container-fluid px-0">
          <div className="row justify-content-arount align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              {/* <img className="img-fluid" src={contact} alt="" /> */}

              <div className="carta">
                <a
                  href="https://yandex.ru/maps/org/kyrgyzsko_turetskaya_mezhdunarodnaya_klinika/49876906440/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "0px",
                  }}
                >
                  Кыргызско-турецкая международная клиника
                </a>
                <a
                  href="https://yandex.ru/maps/10310/osh/category/hospital/184105956/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                  }}
                >
                  Больница для взрослых в Оше
                </a>
                <div id="map" style={{ width: "100%", height: "100%" }}></div>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="contact-box2">
                <div className="px-lg-3">
                  <div className="header-text">
                    <h4>
                      Запишитесь на прием к врачу
                    </h4>
                    <p>Запишитесь на срочную встречу.</p>
                  </div>
                  <form action="">
                    <div className="row">
                      <div className="col form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Имя"
                        />
                      </div>
                      <div className="col form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Телефон"
                        />
                      </div>
                    </div>
                    {/* <div className="row">
                                 <div className="col form-group">
                                    <input type="date" className="form-control" placeholder="Дата" />
                                 </div>
                                 <div className="col form-group">
                                    <input type="time" className="form-control" placeholder="Время" />
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col form-group">
                                    <select className="form-select" placeholder="Отделение">
                                       <option value="1">Выберите отделение</option>
                                       <option value="2">Кардиология</option>
                                       <option value="3">Урология</option>
                                       <option value="4">Неврология</option>
                                    </select>
                                 </div>
                                 <div className="col form-group">
                                    <select className="form-select" placeholder="Врачи">
                                       <option value="1">Выберите врача</option>
                                       <option value="2">Квази Тарикул Ислам</option>
                                       <option value="3">Лутфор Рахман</option>
                                       <option value="4">Сиед Атикул Хак</option>
                                    </select>
                                 </div>
                              </div> */}
                              <div className="form-group">
                                 <textarea className="form-control" cols="30" rows="3" placeholder="Опишите"></textarea>
                              </div>
                    <div className="form-group mb-0">
                      <button className="submit-btn">ОТПРАВИТЬ</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
