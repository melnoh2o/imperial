import { useState } from 'react';

import Arrow from '../Arrow';
import FilterButton from '../FilterButton';

const MobileItem = ({ data, values, setValue, label }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="filter-mobile-stack">
      <button onClick={() => setIsVisible(!isVisible)} type="button" className="filter-mobile_subtitle">
        <span>{label}</span>
        <Arrow isVisible={isVisible} />
      </button>
      {isVisible && (
        <div className="filter-mobile-container">
          <div className="ftco__filter_stack" id="parent-developer">
            <div id="developer" className="filter-flex-container">
              {data.map((item) => (
                <FilterButton key={item.id} item={item} values={values} setValue={setValue} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileItem;
