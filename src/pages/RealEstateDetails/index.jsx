import SEO from '../../components/SEO';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import SmallHeroBg from '../../components/SmallHeroBg';
import Details from '../../components/RealEstates/Details';

const RealEstatesDetails = () => {
  return (
    <>
      <SEO
        title="Описание недвижимости"
        description="Страница дополнительной информации."
        name="ImperialCorporation"
        type="application"
      />
      <SmallHeroBg
        imgUrl="https://res.cloudinary.com/diwpzmuai/image/upload/v1683310040/image_33_v8manr.png"
        title="Описание недвижимости"
      />
      <Details />
      <MotionPrivacyScreen />
    </>
  );
};

export default RealEstatesDetails;
