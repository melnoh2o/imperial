import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Paths } from '../../constants/Paths';
import SEO from '../../components/SEO';
import SmallHeroBg from '../../components/SmallHeroBg';
import MotionPrivacyScreen from '../../components/MotionPrivacyScreen';
import RealEstateListItem from '../../components/Locations/RealEstateListItem';

const RealEstatesByLocation = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const location = searchParams.get('location');
  const name = searchParams.get('name');

  return (
    <>
      <SEO
        title={t('realEstatesByLocation.head.title')}
        description={t('realEstatesByLocation.head.description')}
        keywords={t('realEstatesByLocation.head.keywords')}
        name="ImperialCorporation"
        type="application"
        href={Paths.REAL_ESTATES_BY_LOCATION}
      />
      <SmallHeroBg
        imgUrl="https://res.cloudinary.com/diwpzmuai/image/upload/v1683133326/locations-bg_wd1dip.jpg"
        title={name}
      />
      <RealEstateListItem location={location} />
      <MotionPrivacyScreen />
    </>
  );
};

export default RealEstatesByLocation;
