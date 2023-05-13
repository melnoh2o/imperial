import { useSearchParams } from 'react-router-dom';

import { Paths } from '../../constants/Paths';
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
        description="Откройте для себя красоту Северного Кипра и найдите свой идеальный дом или квартиру в одной из множества локаций, предлагаемых Imperial Corporation. Узнайте больше о каждой локации и о том, как мы можем помочь вам купить недвижимость здесь."
        keywords="Империал, недвижимость в Гирне, недвижимость в Фамагусте, недвижимость в Кирении, недвижимость в Искеле, недвижимость в Лефкоше"
        name="ImperialCorporation"
        type="application"
        href={Paths.REAL_ESTATES_BY_LOCATION}
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
