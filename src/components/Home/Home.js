import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import ServiceSection from '../ServiceSection/ServiceSection';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Feature></Feature>
         <ServiceSection></ServiceSection>
         
         <Contact></Contact>
      </div>
   );
};

export default Home;