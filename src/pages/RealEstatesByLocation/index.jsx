import { useSearchParams } from 'react-router-dom';

import SEO from '../../components/SEO';
import SmallHeroBg from '../../components/SmallHeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import RealEstateListItem from '../../components/Locations/RealEstateListItem';

const RealEstatesByLocation = () => {
  const [searchParams] = useSearchParams();

  const location = searchParams.get('location');

  return (
    <>
      <SEO
        title="Недвижимости по локациям"
        description="Страница недвижимостей по локациям."
        name="ImperialCorporation"
        type="application"
      />
      <SmallHeroBg
        imgUrl="https://res.cloudinary.com/diwpzmuai/image/upload/v1683133326/locations-bg_wd1dip.jpg"
        title={location}
      />
      <RealEstateListItem location={location} />
      <MotionPrivacyScreen />
    </>
  );
};

export default RealEstatesByLocation;
