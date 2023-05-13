import { Paths } from '../../constants/Paths';
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
        description="Узнайте больше о возможностях инвестирования в недвижимость на Северном Кипре с помощью Imperial Corporation. Наш инвестиционный тур предоставляет уникальную возможность ознакомиться с рынком недвижимости на острове и узнать, как мы можем помочь вам достичь ваших финансовых целей."
        keywords="Империал, инвестиции в недвижимость на Северном Кипре, инвестиционные возможности на Северном Кипре, инвестиционный тур на Северный Кипр, недвижимость для инвесторов, инвестиционная программа"
        name="ImperialCorporation"
        type="application"
        href={Paths.INVESTMENT_TOUR}
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
