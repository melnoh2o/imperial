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
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1683825397/IMG_2078_iwqad3.jpg"
        title="Imperial"
        subtitle="Инвестиционный тур по недвижимости"
      />
      <TourCard />
      <FAQ />
      <MotionPrivacyScreen />
    </>
  );
};

export default InvestmentTour;
