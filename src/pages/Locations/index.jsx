import { Paths } from '../../constants/Paths';
import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import LisItem from '../../components/Locations/ListItem';

const Locations = () => {
  return (
    <>
      <SEO
        title="Локации"
        description="Откройте для себя красоту Северного Кипра и найдите свой идеальный дом или квартиру в одной из множества локаций, предлагаемых Imperial Corporation. Узнайте больше о каждой локации и о том, как мы можем помочь вам купить недвижимость здесь."
        keywords="Империал, недвижимость в Гирне, недвижимость в Фамагусте, недвижимость в Кирении, недвижимость в Искеле, недвижимость в Лефкоше"
        name="ImperialCorporation"
        type="application"
        href={Paths.LOCATIONS}
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1684000918/IMG_2090_zceqqc.jpg"
        title="Imperial"
        subtitle="Ключ к вашему будущему дому"
      />
      <LisItem />
      <MotionPrivacyScreen />
    </>
  );
};

export default Locations;
