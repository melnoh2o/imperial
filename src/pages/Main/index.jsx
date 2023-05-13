import { Paths } from '../../constants/Paths';
import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import AboutUs from '../../components/Main/AboutUs';
import HotDeals from '../../components/Main/HotDeals';
import Benefits from '../../components/Main/Benefits';
import SalesStarts from '../../components/Main/SalesStarts';

const Main = () => {
  return (
    <>
      <SEO
        title="Главная"
        description="Imperial Corporation – агентство недвижимости на Северном Кипре, которое помогает своим клиентам приобретать недвижимость на этом красивом острове. У нас вы можете купить квартиры, дома, земельные участки и коммерческую недвижимость на выгодных условиях."
        keywords="Империал, недвижимость на Северном Кипре, агентство недвижимости, покупка недвижимости, продажа недвижимости, аренда недвижимости, жилье на Северном Кипре"
        name="ImperialCorporation"
        type="application"
        href={Paths.MAIN}
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1684000921/IMG_2085_b3mt1w.jpg"
        title="Imperial"
        subtitle="ОТКРОЙТЕ ДВЕРЬ К СВОЕМУ ДОМУ НА СЕВЕРНОМ КИПРЕ!"
      />

      <AboutUs />
      <HotDeals />
      <Benefits />
      <SalesStarts />

      <MotionPrivacyScreen />
    </>
  );
};

export default Main;
