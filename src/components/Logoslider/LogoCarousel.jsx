import React, { useEffect } from 'react';
import slider1 from "../../assets/slider1.jpg"
import slider3 from "../../assets/slider3.jpg"
import slider4 from "../../assets/slider4.jpg"
import slider5 from "../../assets/slider5.jpg"
import slider6 from "../../assets/slider6.jpg"
import slider7 from "../../assets/slider7.jpg"
import slider8 from "../../assets/slider8.jpg"
import "./Logo.css"

const LogoCarousel = () => {
  useEffect(() => {
    const originalLogos = document.querySelector('.logos-slide');
    const copy = originalLogos.cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  return (
    <div>
        <div className="logos mt-4">
          <div className='slider-title'>Alliance with <span className='slider-span'>LEADING GLOBAL CORPORATES</span> </div>
          <div className="logos-slide">
            <img src={slider1} alt="Logo 1" />
            <img src={slider8} alt="Logo 1" />
            <img src={slider3} alt="Logo 1" />
            <img src={slider4} alt="Logo 1" />
            <img src={slider5} alt="Logo 1" />
            <img src={slider6} alt="Logo 1" />

          </div>
          </div>
          <div className='slider-button'><button type="button" class="btn button-know-more mt-3">And More...</button></div>
    </div>
  );
};

export default LogoCarousel;
