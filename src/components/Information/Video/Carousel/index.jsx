import { useRef } from 'react';
import { Carousel as MantineCarousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

import { Variants } from '../../../../constants/animation';
import { Description } from '../../../styles/index';
import { useVideoData } from '../helpers/useVideoData';
import { CarouselStack, CarouselTitle, Wrapper } from './styles';

const Carousel = () => {
  const autoplay = useRef(Autoplay({ delay: 200 }));

  const { data } = useVideoData();

  return (
    <Wrapper variants={Variants.opacity} custom={1.2}>
      <MantineCarousel
        orientation="vertical"
        height="100%"
        withControls
        withIndicators
        loop
        mx="auto"
        slideSize="100%"
        slideGap="xl"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        styles={{
          indicators: {
            right: 0,
          },
          indicator: {
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: 'var(--gray3)',
            transition: 'width 250ms ease',

            '&[data-active]': {
              background: 'var(--black)',
            },
          },
        }}
      >
        {data &&
          data.map((item) => (
            <MantineCarousel.Slide key={item.id}>
              <CarouselStack variants={Variants.opacity} custom={1.2}>
                <CarouselTitle>{item.title}</CarouselTitle>
                <Description>{item.description}</Description>
              </CarouselStack>
            </MantineCarousel.Slide>
          ))}
      </MantineCarousel>
    </Wrapper>
  );
};

export default Carousel;
