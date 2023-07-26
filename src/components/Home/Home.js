import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import ServiceSection from '../ServiceSection/ServiceSection';
import Appointment from '../Appointment/Appointment';
import Otzyv from '../Otzyv/Otzyv';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Feature></Feature>
         <ServiceSection></ServiceSection>
         
         <Otzyv />
         <Appointment />
      </div>
   );
};

export default Home;