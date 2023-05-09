import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import TourCard from '../../components/InvestmentTour/TourCard';
import FAQ from '../../components/InvestmentTour/FAQ';

const InvestmentTour = () => {
  return (
    <>
      <SEO
        title="Инвестиционный тур"
        description="Страница инвестиционного тура."
        name="ImperialCorporation"
        type="application"
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1683133332/information-bg_tbs5y6.jpg"
        title="Тур по недвижимости на Северном Кипре"
        subtitle="Инвестиционный тур"
      />
      <TourCard />
      <FAQ />
      <MotionPrivacyScreen />
    </>
  );
};

export default InvestmentTour;
