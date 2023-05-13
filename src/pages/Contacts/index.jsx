import { Paths } from '../../constants/Paths';
import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import ContactForm from '../../components/Contacts/ContactForm';
import ContactMap from '../../components/Contacts/ContactMap';
import MeetUs from '../../components/Contacts/MeetUs';

const Contacts = () => {
  return (
    <>
      <SEO
        title="Контакты"
        description="Свяжитесь с нами для получения дополнительной информации о наших услугах."
        keywords="Империал, контакты Imperial Corporation, связаться с агентством недвижимости, адрес и телефон компании, электронная почта для связи, форма обратной связи"
        name="ImperialCorporation"
        type="application"
        href={Paths.CONTACTS}
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1684000921/IMG_2088_m3owpe.jpg"
        title="Imperial"
        subtitle="Вместе мы строим нашу империю"
      />
      <ContactForm />
      <ContactMap />
      <MeetUs />
      <MotionPrivacyScreen />
    </>
  );
};

export default Contacts;
