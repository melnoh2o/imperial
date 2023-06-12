import { useTranslation } from 'react-i18next';

import { Paths } from '../../constants/Paths';
import SEO from '../../components/SEO';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import SmallHeroBg from '../../components/SmallHeroBg';
import Details from '../../components/RealEstates/Details';

const RealEstatesDetails = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('realEstateDetails.head.title')}
        description={t('realEstateDetails.head.description')}
        keywords={t('realEstateDetails.head.keywords')}
        name="ImperialCorporation"
        type="application"
        href={Paths.REAL_ESTATE_DETAILS}
      />
      <SmallHeroBg
        imgUrl="https://res.cloudinary.com/diwpzmuai/image/upload/v1683310040/image_33_v8manr.png"
        title={t('realEstateDetails.title')}
      />
      <Details />
      <MotionPrivacyScreen />
    </>
  );
};

export default RealEstatesDetails;
