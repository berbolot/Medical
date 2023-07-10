import Service from '../Service/Service';
import { initializeApp } from 'firebase/app';
import { useEffect, useState } from 'react';
import BitsToImage from '../BitsImage/BitsImage';
const ServiceSection = () => {
const [bits, setBits] = useState('');
const firebaseConfig = {
   apiKey: "AIzaSyAv3cE5ntFjJwhBfOLhowdnjWIuvA7Qadc",
   authDomain: "turkmed-b9c4d.firebaseapp.com",
   databaseURL: "https://turkmed-b9c4d-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "turkmed-b9c4d",
   storageBucket: "turkmed-b9c4d.appspot.com",
   messagingSenderId: "148394040656",
   appId: "1:148394040656:web:c43c323a3a412a5e0f6055",
   measurementId: "G-E9Z501W3W7"
 };


const handleFileChange = async (event) => {
  const file = event.target.files[0];

  try {
    const bits = await fileToBits(file);
    setBits(bits);
  } catch (error) {
    console.error(error);
  }
};

const fileToBits = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const buffer = reader.result;
      const byteArray = new Uint8Array(buffer);

      let bits = '';
      for (let i = 0; i < byteArray.length; i++) {
        const byte = byteArray[i];
        const byteBits = byte.toString(2).padStart(8, '0');
        bits += byteBits; 
      }

      resolve(bits);
    };

    reader.onerror = () => {
      reject(new Error('Failed to read the file.'));
    };

    reader.readAsArrayBuffer(file);
  });
};
 
   return (
      <div className="service-section" style={{marginTop: '100px'}}>
         <div className="container">
            <div className="header-text text-center mb-5">
               <h3>Наши медицинские услуги</h3>
               <p>Служите обществу, улучшая качество жизни за счет улучшения здоровья.</p>
            </div>
            <div className="row">
               <input type='file' onChange={handleFileChange} />
               {bits && <p>Bits: {bits}</p>}
               {/* {
                  services.slice(0, 6).map(service => <Service
                     service={service}
                     key={service.id}></Service> )
               } */}
            </div>
         </div>
      </div>
   );
};

export default ServiceSection;