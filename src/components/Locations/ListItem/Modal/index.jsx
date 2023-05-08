import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal as MantineModal, Stack, rem } from '@mantine/core';
import { Carousel, useAnimationOffsetEffect } from '@mantine/carousel';
import { motion } from 'framer-motion';

import { Variants } from '../../../../constants/animation';
import { Description } from '../../../styles/index';
import { FlexContainer, Separator, LinkBtn } from './styles';

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
          padding: '2rem 2rem 2.4rem',
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
            maw={350}
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
          >
            {images &&
              images.map((image, idx) => (
                <Carousel.Slide key={idx}>
                  <img
                    src={image.thumbUrl}
                    alt="Slider Photo"
                    style={{ width: rem(350), height: rem(300), objectFit: 'cover' }}
                  />
                </Carousel.Slide>
              ))}
          </Carousel>
          <LinkBtn onClick={navigateToRealEstatesPage}>ещё объекты...</LinkBtn>
        </motion.div>
        <Stack spacing={10}>
          <Separator variants={Variants.opacity} custom={1.2} />
          <Description variants={Variants.opacity} custom={1.4}>
            {description}
          </Description>
        </Stack>
      </FlexContainer>
    </MantineModal>
  );
};

export default Modal;
