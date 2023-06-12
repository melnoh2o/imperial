import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Variants } from '../../../../constants/animation';
import Modal from '../Modal';
import { LocationCard, Bg, LocationInfo, LocationInfoTitle, LocationInfoSubtitle } from './styles';

const Item = ({ item }) => {
  const { location, thumbUrl, images, descriptionLocaleRu, descriptionLocaleEn } = item;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        location={location}
        images={images}
        name={descriptionLocaleRu?.name || descriptionLocaleEn?.name}
        description={descriptionLocaleRu?.description || descriptionLocaleEn?.description}
      />
      <LocationCard onClick={() => setIsOpen(true)} variants={Variants.item}>
        <LazyLoadImage effect="blur" src={thumbUrl} alt={`${location} - photo`} className="img" />

        <Bg imgUrl={thumbUrl} className="bg" />
        <LocationInfo className="locationInfo">
          <LocationInfoTitle>{descriptionLocaleRu?.name || descriptionLocaleEn?.name}</LocationInfoTitle>
          <LocationInfoSubtitle>
            {descriptionLocaleRu?.area || descriptionLocaleEn?.area}
          </LocationInfoSubtitle>
        </LocationInfo>
      </LocationCard>
    </>
  );
};

export default Item;
