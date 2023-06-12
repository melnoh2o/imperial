import { useTranslation } from 'react-i18next';

import { Paths } from '../../constants/Paths';
import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import TourCard from '../../components/InvestmentTour/TourCard';
import FAQ from '../../components/InvestmentTour/FAQ';

const InvestmentTour = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('investmentTour.head.title')}
        description={t('investmentTour.head.description')}
        keywords={t('investmentTour.head.keywords')}
        name="ImperialCorporation"
        type="application"
        href={Paths.INVESTMENT_TOUR}
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1683825397/IMG_2078_iwqad3.jpg"
        title={t('investmentTour.title')}
        subtitle={t('investmentTour.subtitle')}
      />
      <TourCard />
      <FAQ />
      <MotionPrivacyScreen />
    </>
  );
};

export default InvestmentTour;
