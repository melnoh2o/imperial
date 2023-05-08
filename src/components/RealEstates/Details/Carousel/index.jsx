import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel as MantineCarousel } from '@mantine/carousel';

import { Variants } from '../../../../constants/animation';
import { ImageWrapper, Img, ImgButton, Wrapper } from './styles';

const Carousel = ({ images }) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const onSlideChange = (index) => {};

  return (
    <Wrapper>
      <MantineCarousel
        withIndicators
        height={465}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        styles={{
          slide: {
            width: 740,
          },
          controls: {
            bottom: 40,
            top: 'auto',
            left: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          },

          control: {
            width: 40,
            height: 40,
            color: 'var(--white)',
            borderRadius: 0,
            border: '2px solid var(--black)',
            background: 'var(--black)',
            transition: 'var(--transition)',

            '&:hover': {
              color: 'var(--black)',
              borderColor: 'var(--white)',
              background: 'var(--white)',
            },

            '&:active': {
              color: 'var(--black)',
              borderColor: 'var(--white)',
              background: 'var(--white)',
            },

            svg: {
              width: 30,
              height: 30,
            },
          },

          indicator: {
            height: 4,
          },
        }}
      >
        {images?.map((image) => (
          <MantineCarousel.Slide key={image.id}>
            <Img src={image.thumbUrl} />
          </MantineCarousel.Slide>
        ))}
      </MantineCarousel>

      <ImageWrapper variants={Variants.container} initial="hidden" whileInView="visible">
        {images.slice(0, 6).map((image) => (
          <ImgButton
            key={image.id}
            type="button"
            $imgUrl={image.thumbUrl}
            variants={Variants.item}
          ></ImgButton>
        ))}
      </ImageWrapper>
    </Wrapper>
  );
};

export default Carousel;
