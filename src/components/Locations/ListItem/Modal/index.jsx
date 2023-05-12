import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal as MantineModal, Stack, rem } from '@mantine/core';
import { Carousel, useAnimationOffsetEffect } from '@mantine/carousel';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Variants } from '../../../../constants/animation';
import { FlexContainer, Separator, LinkBtn, ImageWrapper, InfoDescription } from './styles';

const TRANSITION_DURATION = 200;

const Modal = ({ isOpen, close, description, images, location }) => {
  const [embla, setEmbla] = useState(null);

  const navigate = useNavigate();

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  const navigateToRealEstatesPage = () => {
    close();
    navigate(`/real-estates-by-location?location=${location}`);
  };

  return (
    <MantineModal
      centered
      opened={isOpen}
      onClose={close}
      size="xl"
      styles={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
        header: {
          background: 'transparent',
          borderRadius: 0,
        },
        content: {
          borderRadius: 0,
        },
        body: {
          padding:
            'clamp(1.63rem, calc(1.48rem + 0.73vw), 2.00rem) clamp(1.63rem, calc(1.48rem + 0.73vw), 2.00rem) clamp(1.63rem, calc(1.33rem + 1.46vw), 2.38rem)',
        },
        close: {
          border: '1px solid transparent',
          borderRadius: 0,
          background: 'transparent',
          transition: 'var(--transition)',

          svg: {
            width: 25,
            height: 25,
            color: 'var(--black)',
          },

          '&:hover': {
            background: 'var(--black)',
            borderColor: 'var(--black)',
            svg: {
              color: 'var(--white)',
            },
          },
        },
      }}
    >
      <FlexContainer initial="hidden" whileInView="enter" exit="exit">
        <motion.div variants={Variants.opacity} custom={1.2}>
          <Carousel
            loop
            getEmblaApi={setEmbla}
            slideSize="100%"
            styles={{
              control: {
                color: ' var(--black)',
                border: '1px solid var(--black)',
                borderRadius: 0,
                background: 'var(--white)',
                transition: 'var(--transition)',

                '&:hover': {
                  color: ' var(--white)',
                  border: '1px solid var(--white)',
                  background: 'var(--black)',
                },
              },
            }}
            breakpoints={[
              { maxWidth: 'md', slideSize: '100%' },
              { maxWidth: 'sm', slideSize: '100%' },
            ]}
          >
            {images &&
              images.map((image, idx) => (
                <Carousel.Slide key={idx}>
                  <ImageWrapper>
                    <LazyLoadImage effect="blur" src={image.thumbUrl} alt="Slider Photo" />
                  </ImageWrapper>
                </Carousel.Slide>
              ))}
          </Carousel>
          <LinkBtn onClick={navigateToRealEstatesPage}>Перейти к объектам...</LinkBtn>
        </motion.div>
        <Stack spacing={10}>
          <Separator variants={Variants.opacity} custom={1.2} />
          <InfoDescription variants={Variants.opacity} custom={1.4}>
            {description}
          </InfoDescription>
        </Stack>
      </FlexContainer>
    </MantineModal>
  );
};

export default Modal;
