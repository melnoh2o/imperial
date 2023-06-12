import { useTranslation } from 'react-i18next';
import { BsCalendar3 } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Variants } from '../../constants/animation';
import {
  ContentLink,
  ContentWrapper,
  Developer,
  FooterWrapper,
  Handover,
  ImageWrapper,
  InfoTitle,
  InfoWrapper,
  Location,
  Wrapper,
} from './styles';

const RealEstateCard = ({ item }) => {
  const { t } = useTranslation();

  const { id, name, price, developer, location, handover, image } = item;

  return (
    <Wrapper variants={Variants.item}>
      <ImageWrapper>
        <LazyLoadImage effect="blur" className="img" src={image} />
        <InfoWrapper>
          <InfoTitle>{price.toLocaleString()}£</InfoTitle>
        </InfoWrapper>
      </ImageWrapper>
      <ContentWrapper>
        <ContentLink to={`/real-estate-details/${id}`}>{name}</ContentLink>
        <Developer>
          {t('realEstate.card.developer')} - <strong>{developer}</strong>
        </Developer>
      </ContentWrapper>
      <FooterWrapper>
        <Location>
          {t('realEstate.card.location')} <strong>{location}</strong>
        </Location>
        <Handover>
          <span>{handover}</span>
          <BsCalendar3 />
        </Handover>
      </FooterWrapper>
    </Wrapper>
  );
};

export default RealEstateCard;
