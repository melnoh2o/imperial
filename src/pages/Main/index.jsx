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
      <SEO title="Главная" description="Главная страница." name="ImperialCorporation" type="application" />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1683133352/main-bg_so7zdj.png"
        title="Наличие идеи. Создание пространств."
        subtitle="МЫ ВЫСТУПАЕМ ЗА"
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
