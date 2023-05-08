import { Carousel } from '@mantine/carousel';
import { Group, Stack } from '@mantine/core';
import { motion } from 'framer-motion';
import { MdOutlineLocationOn } from 'react-icons/md';

import useStore from '../../../../store';
import { Variants } from '../../../../constants/animation';
import { useHotDealsData } from '../helpers/useHotDealsData';
import {
  CardButton,
  CardDescription,
  CardTitle,
  CardWrapper,
  ContentBox,
  ImageWrapper,
  Img,
  PriceDescriptionList,
} from './styles';

const ListItem = () => {
  const openModal = useStore((store) => store.openCallbackModal);
  const { hotDeals } = useHotDealsData();

  return (
    <Carousel
      slideSize="33.333%"
      slideGap="sm"
      loop
      align="start"
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

          '&:first-of-type': {
            position: 'absolute',
            left: -50,
          },

          '&:last-child': {
            position: 'absolute',
            right: -50,
          },

          svg: {
            width: 40,
            height: 40,
          },
        },
      }}
    >
      {hotDeals.map((item) => (
        <Carousel.Slide key={item.id}>
          <CardWrapper initial="hidden" exit="exit" whileInView="enter" viewport={{ amount: 0.3 }}>
            <ImageWrapper variants={Variants.opacity} custom={1.2}>
              <Img src={item.img} alt={`${item.title} photo`} />
            </ImageWrapper>
            <ContentBox>
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
                    <p>В продаже:</p>
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

              <CardButton onClick={openModal} type="button" variants={Variants.opacity} custom={1.4}>
                Узнать подробнее
              </CardButton>
            </ContentBox>
          </CardWrapper>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default ListItem;
