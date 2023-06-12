import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
        title={t('realEstate.head.title')}
        description={t('realEstate.head.description')}
        keywords={t('realEstate.head.keywords')}
        name="ImperialCorporation"
        type="application"
        href={Paths.REAL_ESTATES}
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1684000924/IMG_2086_mnftdl.jpg"
        title={t('realEstate.title')}
        subtitle={t('realEstate.subtitle')}
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
