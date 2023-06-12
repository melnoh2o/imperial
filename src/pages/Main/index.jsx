import { useTranslation } from 'react-i18next';

import { Paths } from '../../constants/Paths';
import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import AboutUs from '../../components/Main/AboutUs';
import HotDeals from '../../components/Main/HotDeals';
import Benefits from '../../components/Main/Benefits';
import SalesStarts from '../../components/Main/SalesStarts';

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('main.head.title')}
        description={t('main.head.description')}
        keywords={t('main.head.keywords')}
        name="ImperialCorporation"
        type="application"
        href={Paths.MAIN}
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1684000921/IMG_2085_b3mt1w.jpg"
        title={t('main.title')}
        subtitle={t('main.subtitle')}
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
