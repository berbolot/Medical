import React from 'react';
import banner from '../../images/de-illustration.png'
import { Carousel } from 'react-bootstrap';
import ButtonCta from '../UI/button/ButtonCta';
const Banner = () => {
   return (
      <div className="banner" >
         <div className="banner-bg">
            <div className="container-fluid px-0">
               <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0 " >
                     <div className="text-box ">
                        <h1 className='fs-1'>Ваше здоровье - наша первоочередная задача: надежная медицинская помощь с душой</h1>
                        <ButtonCta text={'Записаться на прием'} />
                     </div>
                  </div>
                
               </div>
            </div>
         </div>
         <div className='bg_carousel'>
         <Carousel interval={3000}>
      <Carousel.Item>
        <img
         //  className="d-block w-100"
          src="https://template-kit.ancorathemes.com/pandemic-prevention-and-awareness/wp-content/uploads/sites/11/2020/04/doctors-holding-samples-in-hospital-coronavirus-co-MMETEDM.jpg"
          alt="First slide"
        />
   
      </Carousel.Item>
      <Carousel.Item>
        <img
         //  className="d-block w-100"
          src="https://pbs.twimg.com/media/FsUOxF3XoAEtq1K?format=jpg&name=large"
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
         //  className="d-block w-100"
          src="https://ardis-dent.ru/wp-content/uploads/2021/09/dm_il-dentista-moderno_sutura-nodo-chirurgia-terzo-molare-superiore-scaled.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
         </div>
        
      </div>
   );
};

export default Banner;