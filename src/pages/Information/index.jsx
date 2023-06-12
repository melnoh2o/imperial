import { useTranslation } from 'react-i18next';

import { Paths } from '../../constants/Paths';
import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import Testimonials from '../../components/Information/Testimonials';
import Services from '../../components/Information/Services';
import Numbers from '../../components/Information/Numbers';
import Concept from '../../components/Information/Concept';
import Video from '../../components/Information/Video';

const Information = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('information.head.title')}
        description={t('information.head.description')}
        keywords={t('information.head.keywords')}
        name="ImperialCorporation"
        type="application"
        href={Paths.INFORMATION}
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1683825397/IMG_2083_jt9g4c.jpg"
        title={t('information.title')}
        subtitle={t('information.subtitle')}
      />
      <Services />
      <Video />
      <Numbers />
      <Concept />
      <Testimonials />
      <MotionPrivacyScreen />
    </>
  );
};

export default Information;
