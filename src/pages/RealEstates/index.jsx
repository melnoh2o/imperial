import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Paths } from '../../constants/Paths';
import { RealEstatesServices } from '../../services/realEstateServices';
import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import FilterListItem from '../../components/RealEstates/FilterLisItem';
import ListItems from '../../components/RealEstates/ListItem';
import { FlexContainer } from '../../components/RealEstates/styles';

const RealEstates = () => {
  const { data: minMax } = useQuery(['min-max'], () => RealEstatesServices.getMinMaxValues());

  const [developers, setDevelopers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [handovers, setHandovers] = useState([]);
  const [initialPrice, setInitialPrice] = useState(minMax?.min);
  const [finalPrice, setFinalPrice] = useState(minMax?.max);

  useEffect(() => {
    if (minMax) {
      setInitialPrice(minMax.min);
      setFinalPrice(minMax.max);
    }
  }, [minMax]);

  return (
    <>
      <SEO
        title="Недвижимость"
        description="Imperial Corporation – агентство недвижимости на Северном Кипре, которое предлагает широкий выбор недвижимости на этом прекрасном острове. На этой странице вы можете найти квартиры, дома, коммерческую недвижимость на продажу на выгодных условиях."
        keywords="Империал, недвижимость на Северном Кипре, квартиры на Северном Кипре, виллы на Северном Кипре, дома на Северном Кипре, коммерческая недвижимость на Северном Кипре, недвижимость для продажи на Северном Кипре, недвижимость для аренды на Северном Кипре, рынок недвижимости на Северном Кипре, цены на недвижимость на Северном Кипре, описание недвижимости на Северном Кипре, фотографии недвижимости на Северном Кипре, покупка недвижимости на Северном Кипре, продажа недвижимости на Северном Кипре, аренда недвижимости на Северном Кипре"
        name="ImperialCorporation"
        type="application"
        href={Paths.REAL_ESTATES}
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1684000924/IMG_2086_mnftdl.jpg"
        title="Imperial"
        subtitle="Где ваше сердце, там и ваш дом"
      />
      <FlexContainer $isBoth>
        <FilterListItem
          developers={developers}
          locations={locations}
          handovers={handovers}
          setDevelopers={setDevelopers}
          setLocations={setLocations}
          setHandovers={setHandovers}
          initialPrice={initialPrice}
          setInitialPrice={setInitialPrice}
          finalPrice={finalPrice}
          setFinalPrice={setFinalPrice}
          minMax={minMax}
        />
        <ListItems
          initialPrice={initialPrice}
          finalPrice={finalPrice}
          developers={developers}
          locations={locations}
          handovers={handovers}
        />
      </FlexContainer>
      <MotionPrivacyScreen />
    </>
  );
};

export default RealEstates;
