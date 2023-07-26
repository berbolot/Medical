import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
   const {id, image, name, description} = service;

   const navigate = useNavigate()

   const handleDetails = id => {
      const url = `/service/${id}`
      navigate(url)
   }

   return (
      <div className="col-sm-6 col-lg-4 mx-auto">
         <div className="service-box shadow">
            <img className="img-fluid" src={image} alt="" />
            <div className="info">
               <h4 className="name">{name}</h4>
               <p className="description">{description.slice(0, 80)}</p>
               <button onClick={() => handleDetails(id)}>Читать далее</button>
            </div>
         </div>
      </div>
   );
};

export default Service;