import { useTranslation } from 'react-i18next';

import { Paths } from '../../constants/Paths';
import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import LisItem from '../../components/Locations/ListItem';

const Locations = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('location.head.title')}
        description={t('location.head.description')}
        keywords={t('location.head.keywords')}
        name="ImperialCorporation"
        type="application"
        href={Paths.LOCATIONS}
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1684000918/IMG_2090_zceqqc.jpg"
        title={t('location.title')}
        subtitle={t('location.subtitle')}
      />
      <LisItem />
      <MotionPrivacyScreen />
    </>
  );
};

export default Locations;
