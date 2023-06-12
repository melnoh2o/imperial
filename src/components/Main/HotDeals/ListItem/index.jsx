import { Carousel } from '@mantine/carousel';
import { Group, Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MdOutlineLocationOn } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import useStore from '../../../../store';
import { Variants } from '../../../../constants/animation';
import { useHotDealsData } from '../helpers/useHotDealsData';
import {
  CardButton,
  CardDescription,
  CardTitle,
  CardWrapper,
  ImageWrapper,
  PriceDescriptionList,
  Wrapper,
} from './styles';

const ListItem = () => {
  const { t } = useTranslation();

  const openModal = useStore((store) => store.openCallbackModal);
  const { hotDeals } = useHotDealsData();

  return (
    <Wrapper>
      <Carousel
        slideSize="33.333%"
        slideGap="sm"
        height="100%"
        align="start"
        loop
        styles={{
          control: {
            borderRadius: 0,
            border: '1px solid var(--white)',
            background: 'var(--white)',
            transition: 'var(--transition)',

            '&:hover': {
              borderColor: 'var(--black)',
              background: 'var(--black)',

              svg: {
                color: 'var(--white)',
              },
            },

            '@media (min-width: 320px)': {
              '&:first-of-type': {
                position: 'absolute',
                left: -10,
              },

              '&:last-child': {
                position: 'absolute',
                right: -10,
              },
            },

            '@media (min-width: 480px)': {
              '&:first-of-type': {
                position: 'absolute',
                left: -40,
              },

              '&:last-child': {
                position: 'absolute',
                right: -40,
              },
            },

            '@media (min-width: 64em)': {
              '&:first-of-type': {
                position: 'absolute',
                left: -50,
              },

              '&:last-child': {
                position: 'absolute',
                right: -50,
              },
            },

            svg: {
              width: 'clamp(1.88rem, calc(1.63rem + 1.22vw), 2.50rem)',
              height: 'clamp(1.88rem, calc(1.63rem + 1.22vw), 2.50rem)',
            },
          },
        }}
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%' },
        ]}
      >
        {hotDeals.map((item) => (
          <Carousel.Slide key={item.id}>
            <CardWrapper initial="hidden" exit="exit" whileInView="enter">
              <ImageWrapper variants={Variants.opacity} custom={1.2} viewport={{ amount: 0.2 }}>
                <LazyLoadImage effect="blur" src={item.img} alt={`${item.title} photo`} />
              </ImageWrapper>
              <Stack spacing={8}>
                <CardTitle variants={Variants.opacity} custom={1.3}>
                  {item.title}
                </CardTitle>
                <CardDescription variants={Variants.opacity} custom={1.3}>
                  {item.description}
                </CardDescription>
              </Stack>

              <PriceDescriptionList
                variants={Variants.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
              >
                <motion.div variants={Variants.item}>
                  <Group position="apart">
                    <p>{t('main.hotDeals.card.title')}</p>
                    <Group spacing={4}>
                      <MdOutlineLocationOn className="strong" />
                      <p className="strong">{item.location}</p>
                    </Group>
                  </Group>
                </motion.div>
                {item.descriptions.map((item) => (
                  <motion.p variants={Variants.item} key={item.id}>
                    {item.description}
                  </motion.p>
                ))}
              </PriceDescriptionList>

              <CardButton
                onClick={openModal}
                type="button"
                variants={Variants.opacity}
                custom={1.4}
                viewport={{ amount: 0.3 }}
              >
                {t('main.hotDeals.card.btnText')}
              </CardButton>
            </CardWrapper>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default ListItem;
