import { Group, Space } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';

import useStore from '../../../store';
import { Variants } from '../../../constants/animation';
import { ContentWrapper, Container, Description } from '../../styles/index';
import { useSalesStartsData } from './helpers/useSalesStartsData';
import { Button, ImageWrapper, Img, InnerTitle, InnerTitleStack, InnerWrapper, YearLine } from './styles';

const SalesStarts = () => {
  const open = useStore((store) => store.openCallbackModal);
  const { data } = useSalesStartsData();

  return (
    <ContentWrapper>
      <Container>
        <InnerWrapper>
          <InnerTitleStack initial="hidden" exit="exit" whileInView="enter" viewport={{ amount: 0.3 }}>
            <YearLine variants={Variants.opacity} custom={1.2}>
              {data.year}
            </YearLine>
            <InnerTitle variants={Variants.opacity} custom={1.3}>
              {data.title}
            </InnerTitle>
            <Description variants={Variants.opacity} custom={1.4}>
              {data.description1}
              <Space h="md" />
              <Group spacing={4}>
                <MdOutlineLocationOn /> <span>{data.location}</span>
              </Group>
              <Space h="md" />
              <span dangerouslySetInnerHTML={{ __html: data.description2 }} />
            </Description>
            <Button onClick={open} type="button" variants={Variants.opacity} custom={1.5}>
              <span>Подробнее</span>
              <BsArrowRight />
            </Button>
          </InnerTitleStack>

          <ImageWrapper
            initial="hidden"
            exit="exit"
            whileInView="enter"
            viewport={{ amount: 0.4 }}
            variants={Variants.opacity}
            custom={1.1}
          >
            <Carousel
              styles={{
                control: {
                  width: 60,
                  height: 60,
                  color: 'var(--white)',
                  borderRadius: '100%',
                  border: '1px solid var(--black)',
                  background: 'var(--black)',
                  transition: 'var(--transition)',

                  '&[data-inactive]': {
                    opacity: 0,
                    cursor: 'default',
                  },

                  '&:hover, &:focus': {
                    color: 'var(--black)',
                    borderColor: 'var(--white)',
                    background: 'var(--white)',
                  },

                  svg: {
                    height: 35,
                    width: 35,
                  },
                },
              }}
            >
              {data.images.map((item) => (
                <Carousel.Slide key={item.id}>
                  <Img src={item.thumbUrl} alt={data.title} />
                </Carousel.Slide>
              ))}
            </Carousel>
          </ImageWrapper>
        </InnerWrapper>
      </Container>
    </ContentWrapper>
  );
};

export default SalesStarts;
