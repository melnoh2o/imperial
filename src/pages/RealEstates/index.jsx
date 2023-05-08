import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

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

  return (
    <>
      <SEO
        title="Недвижимость"
        description="Страница недвижимостей."
        name="ImperialCorporation"
        type="application"
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1683133340/real-estates-bg_ibrbq4.jpg"
        title="Imperial"
        subtitle="Где ваше сердце, там и ваш дом"
      />
      <FlexContainer>
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
