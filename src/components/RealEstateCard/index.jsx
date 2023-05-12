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
  return (
    <Wrapper variants={Variants.item}>
      <ImageWrapper>
        <LazyLoadImage effect="blur" className="img" src={item.image} />
        <InfoWrapper>
          <InfoTitle>{item.price.toLocaleString()}£</InfoTitle>
        </InfoWrapper>
      </ImageWrapper>
      <ContentWrapper>
        <ContentLink to={`/real-estate-details/${item.id}`}>{item.name}</ContentLink>
        <Developer>
          Застройщик - <strong>{item.developer}</strong>
        </Developer>
      </ContentWrapper>
      <FooterWrapper>
        <Location>
          Локация: <strong>{item.location}</strong>
        </Location>
        <Handover>
          <span>{item.handover}</span>
          <BsCalendar3 />
        </Handover>
      </FooterWrapper>
    </Wrapper>
  );
};

export default RealEstateCard;
