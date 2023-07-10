import React from 'react';
import contact from '../../images/contact.png'

const Appointment = () => {
   return (
      <div className="contact appointment">
         <div className="contact-bg appointment-bg">
            <div className="container-fluid px-0">
               <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                     <img className="img-fluid" src={contact} alt="" />
                  </div>
                  <div className="col-lg-6">
                     <div className="contact-box">
                        <div className="px-lg-3">
                           <div className="header-text">   
                              <h2>Записаться на прием</h2>
                              <p>Запишитесь на срочную встречу.</p>
                           </div>
                           <form action="">
                              <div className="row">
                                 <div className="col form-group">
                                    <input type="text" className="form-control" placeholder="Имя" />
                                 </div>
                                 <div className="col form-group">
                                    <input type="number" className="form-control" placeholder="Телефон" />
                                 </div>
                              </div>
                              <div className="row">
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
                              </div>
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