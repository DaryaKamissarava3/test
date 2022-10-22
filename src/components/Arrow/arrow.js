import './arrow.css';
import React from 'react';

const Arrow = ({ arrowImg, changeSlide, changeClass, sliderMin, sliderMax, arrayLength }) => {
  if (!(sliderMin === 0 || sliderMax >= arrayLength)) {

    return <img src={arrowImg} alt="changeSlide" className={changeClass} onClick={changeSlide} />;
  }
};

export default Arrow;