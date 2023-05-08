import { useState, useEffect } from 'react';

import { Wrapper } from './styles';

const SliderGradient = ({ initialPrice, finalPrice, max }) => {
  const [linearGradient, setLinearGradient] = useState();

  useEffect(() => {
    const percent1 = (initialPrice / max) * 100;
    const percent2 = (finalPrice / max) * 100;
    setLinearGradient(
      `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`
    );
  }, [finalPrice, initialPrice]);

  return <Wrapper style={{ background: linearGradient }} />;
};

export default SliderGradient;
