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
  return (
    <>
      <SEO
        title="Информация"
        description="Imperial Corporation – агентство недвижимости на Северном Кипре, которое предоставляет своим клиентам качественные услуги по приобретению и продаже недвижимости на острове. Узнайте больше о нашей команде и опыте работы в этой области."
        keywords="Империал, Imperial Corporation, агентство недвижимости на Северном Кипре, история компании, наша команда, наши ценности"
        name="ImperialCorporation"
        type="application"
        href={Paths.INFORMATION}
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1683825397/IMG_2083_jt9g4c.jpg"
        title="Imperial"
        subtitle="Почему мы?"
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
