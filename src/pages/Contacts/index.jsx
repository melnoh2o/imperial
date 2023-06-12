import { useTranslation } from 'react-i18next';

import { Paths } from '../../constants/Paths';
import SEO from '../../components/SEO';
import HeroBg from '../../components/HeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import ContactForm from '../../components/Contacts/ContactForm';
import ContactMap from '../../components/Contacts/ContactMap';
import MeetUs from '../../components/Contacts/MeetUs';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('contacts.head.title')}
        description={t('contacts.head.description')}
        keywords={t('contacts.head.keywords')}
        name="ImperialCorporation"
        type="application"
        href={Paths.CONTACTS}
      />
      <HeroBg
        url="https://res.cloudinary.com/diwpzmuai/image/upload/v1684000921/IMG_2088_m3owpe.jpg"
        title={t('contacts.title')}
        subtitle={t('contacts.subtitle')}
      />
      <ContactForm />
      <ContactMap />
      <MeetUs />
      <MotionPrivacyScreen />
    </>
  );
};

export default Contacts;
