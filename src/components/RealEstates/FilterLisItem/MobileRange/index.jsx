import { useState } from 'react';

import Arrow from '../Arrow';
import SliderGradient from '../SliderGradient';

const MobileRange = ({ initialPrice, finalPrice, minMax, setInitialPrice, setFinalPrice }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="filter-mobile-stack">
      <button onClick={() => setIsVisible(!isVisible)} type="button" className="filter-mobile_subtitle">
        <span>Цена</span>
        <Arrow isVisible={isVisible} />
      </button>
      {isVisible && (
        <div className="ftco__filter_stack">
          <div className="slider-track-container">
            <SliderGradient initialPrice={initialPrice} finalPrice={finalPrice} max={minMax?.max} />
            <input
              value={initialPrice}
              onChange={(event) => setInitialPrice(event.target.value)}
              type="range"
              min={minMax?.min}
              max={minMax?.max}
              id="slider-1"
            />
            <input
              value={finalPrice}
              onChange={(event) => setFinalPrice(event.target.value)}
              type="range"
              min={minMax?.min}
              max={minMax?.max}
              id="slider-2"
            />
          </div>
          <div className="ftco__group">
            <input
              value={initialPrice}
              min={minMax?.min}
              max={minMax?.max}
              onChange={(event) => setInitialPrice(event.target.value)}
              type="number"
              className="ftco__number-input"
              id="ftco__number-input1"
            />
            &nbsp;—&nbsp;
            <input
              value={finalPrice}
              min={minMax?.min}
              max={minMax?.max}
              onChange={(event) => setFinalPrice(event.target.value)}
              type="number"
              className="ftco__number-input"
              id="ftco__number-input2"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileRange;
