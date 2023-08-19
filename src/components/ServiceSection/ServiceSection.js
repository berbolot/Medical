import sn1 from "../../images/1.png";
import sn2 from "../../images/2.png";
import sn3 from "../../images/3.png";
import sn4 from "../../images/4.png";
import sn5 from "../../images/5.png";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <div className="service-section" style={{ marginTop: "60px" }}>
      <div className="container">
        <div className="header-text text-center mb-5">
          <h3>Наши медицинские услуги</h3>
          <p>
            Служите обществу, улучшая качество жизни за счет улучшения здоровья.
          </p>
        </div>
        {/* <div className="row">
          <input type="file" onChange={handleFileChange} />
        </div> */}

        <h4>Анализы и диагностика</h4>
        <div className="uslugi_df">
          <div className="uslugi">
            <img src={sn1} alt="images-KT" />
            <Link to="/contact">
              <button className="service_btn">КТ</button>
            </Link>
          </div>
          <div className="uslugi">
            <img src={sn2} alt="images-Лабораторная_диагностика" />
            <Link to="/contact">
              <button className="service_btn">Лабораторная диагностика</button>
            </Link>
          </div>
          <div className="uslugi">
            <img src={sn3} alt="images-УЗИ" />
            <Link to="/contact">
              <button className="service_btn">УЗИ</button>
            </Link>
          </div>
          <div className="uslugi">
            <img src={sn4} alt="images-Функциональная_диагностика" />
            <Link to="/contact">
              <button className="service_btn">
                Функциональная диагностика
              </button>
            </Link>
          </div>
          <div className="uslugi">
            <img src={sn5} alt="images-Эндоскопия" />
            <Link to="/contact">
              <button className="service_btn">Эндоскопия</button>
            </Link>
          </div>
          <div className="uslugi">
            <img src={sn5} alt="images-Эндоскопия" />
            <Link to="/contact">
              <button className="service_btn">Эндоскопия</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
