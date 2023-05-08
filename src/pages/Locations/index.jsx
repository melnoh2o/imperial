import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import LisItem from '../../components/Locations/ListItem';

const Locations = () => {
  return (
    <>
      <SEO title="Локации" description="Страница локаций." name="ImperialCorporation" type="application" />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1683133326/locations-bg_wd1dip.jpg"
        title="Imperial"
        subtitle="Ключ к вашему будущему дому"
      />
      <LisItem />
      <MotionPrivacyScreen />
    </>
  );
};

export default Locations;
