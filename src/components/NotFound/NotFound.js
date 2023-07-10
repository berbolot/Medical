import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/page_not_found.svg'

const NotFound = () => {
   return (
      <div className="not-found">
         <div className="container text-center">
            <img className="img-fluid" src={notFound} alt="" />
            <h3>Ох! Страница не найдена</h3>
            <Link to="/home">Вернуться домой</Link>
         </div>
      </div>
   );
};

export default NotFound;