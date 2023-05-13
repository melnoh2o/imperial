import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Variants } from '../../../../constants/animation';
import Modal from '../Modal';
import { LocationCard, Bg, LocationInfo, LocationInfoTitle, LocationInfoSubtitle } from './styles';

const Item = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        description={item.description}
        images={item.images}
        location={item.location}
      />
      <LocationCard onClick={() => setIsOpen(true)} variants={Variants.item}>
        <LazyLoadImage effect="blur" src={item.thumbUrl} alt={`${item.location} - photo`} className="img" />

        <Bg imgUrl={item.thumbUrl} className="bg" />
        <LocationInfo className="locationInfo">
          <LocationInfoTitle>{item.location}</LocationInfoTitle>
          <LocationInfoSubtitle>{item.area}</LocationInfoSubtitle>
        </LocationInfo>
      </LocationCard>
    </>
  );
};

export default Item;
