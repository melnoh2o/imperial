import { Paths } from '../../constants/Paths';
import SEO from '../../components/SEO';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import SmallHeroBg from '../../components/SmallHeroBg';
import Details from '../../components/RealEstates/Details';

const RealEstatesDetails = () => {
  return (
    <>
      <SEO
        title="Описание недвижимости"
        description="Imperial Corporation – агентство недвижимости на Северном Кипре, которое предлагает широкий выбор недвижимости на этом прекрасном острове. На этой странице вы можете найти квартиры, дома, коммерческую недвижимость на продажу на выгодных условиях."
        keywords="Империал, недвижимость на Северном Кипре, квартиры на Северном Кипре, виллы на Северном Кипре, дома на Северном Кипре, коммерческая недвижимость на Северном Кипре, недвижимость для продажи на Северном Кипре, недвижимость для аренды на Северном Кипре, рынок недвижимости на Северном Кипре, цены на недвижимость на Северном Кипре, описание недвижимости на Северном Кипре, фотографии недвижимости на Северном Кипре, покупка недвижимости на Северном Кипре, продажа недвижимости на Северном Кипре, аренда недвижимости на Северном Кипре"
        name="ImperialCorporation"
        type="application"
        href={Paths.REAL_ESTATE_DETAILS}
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
