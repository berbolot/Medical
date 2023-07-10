import React, { useEffect, useRef, useState } from 'react';

function BitsToImage({ bits, width, height }) {
  const [imageSrc, setImageSrc] = useState('');

  const canvasRef = useRef(null);

  useEffect(() => {
    const createImage = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const imageData = context.createImageData(width, height);
      const data = imageData.data;

      let dataIndex = 0;
      for (let i = 0; i < bits.length; i += 8) {
        const byteBits = bits.substr(i, 8);
        const byte = parseInt(byteBits, 2);

        data[dataIndex++] = byte; 
        data[dataIndex++] = byte; 
        data[dataIndex++] = byte; 
        data[dataIndex++] = 255;  
      }

      context.putImageData(imageData, 0, 0);

      const imgSrc = canvas.toDataURL();
      setImageSrc(imgSrc);
    };

    createImage();
  }, [bits, width, height]);

  return <img ref={canvasRef} src={imageSrc} alt="Bits to Image" />;
}

export default BitsToImage;