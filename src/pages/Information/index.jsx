import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import Testimonials from '../../components/Information/Testimonials';
import Services from '../../components/Information/Services';
import Numbers from '../../components/Information/Numbers';
import Concept from '../../components/Information/Concept';
import Video from '../../components/Information/Video';

const Information = () => {
  return (
    <>
      <SEO
        title="Информация"
        description="Страница информации."
        name="ImperialCorporation"
        type="application"
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1683133352/main-bg_so7zdj.png"
        title="Информация."
        subtitle="Информация"
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
