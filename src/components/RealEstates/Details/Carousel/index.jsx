import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel as MantineCarousel } from '@mantine/carousel';

import { Variants } from '../../../../constants/animation';
import { ImgsGroup, Img, ImgButton, Wrapper, ImgWrapper } from './styles';

const Carousel = ({ images }) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const onSlideChange = (index) => {};

  return (
    <Wrapper>
      <MantineCarousel
        withIndicators
        slideSize="100%"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        styles={{
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

            '@media (min-width: 320px)': {
              width: 30,
              height: 30,
            },

            svg: {
              width: 30,
              height: 30,

              '@media (min-width: 320px)': {
                width: 25,
                height: 25,
              },
            },
          },

          indicator: {
            height: 4,
          },
        }}
      >
        {images?.map((image) => (
          <MantineCarousel.Slide key={image.id}>
            <ImgWrapper>
              <Img src={image.thumbUrl} />
            </ImgWrapper>
          </MantineCarousel.Slide>
        ))}
      </MantineCarousel>

      <ImgsGroup variants={Variants.container} initial="hidden" whileInView="visible">
        {images.slice(0, 6).map((image) => (
          <ImgButton
            key={image.id}
            type="button"
            $imgUrl={image.thumbUrl}
            variants={Variants.item}
          ></ImgButton>
        ))}
      </ImgsGroup>
    </Wrapper>
  );
};

export default Carousel;
