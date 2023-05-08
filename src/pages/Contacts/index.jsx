import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import ContactForm from '../../components/Contacts/ContactForm';
import ContactMap from '../../components/Contacts/ContactMap';
import MeetUs from '../../components/Contacts/MeetUs';

const Contacts = () => {
  return (
    <>
      <SEO title="Контакты" description="Страница для связи." name="ImperialCorporation" type="application" />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1683133306/contact-bg_pb2qyg.webp"
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
