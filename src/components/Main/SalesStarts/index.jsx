import { useTranslation } from 'react-i18next';
import { Carousel } from '@mantine/carousel';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import useStore from '../../../store';
import { Variants } from '../../../constants/animation';
import { ContentWrapper, Container, Description } from '../../styles/index';
import { useSalesStartsData } from './helpers/useSalesStartsData';
import { Button, ImageWrapper, InnerTitle, InnerTitleStack, InnerWrapper, YearLine, Space } from './styles';

const SalesStarts = () => {
  const { t } = useTranslation();

  const open = useStore((store) => store.openCallbackModal);
  const { data } = useSalesStartsData();

  return (
    <ContentWrapper $isLast>
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
              <Space />
              <span className="group">
                <MdOutlineLocationOn /> <span>{data.location}</span>
              </span>
              <Space />
              <span dangerouslySetInnerHTML={{ __html: data.description2 }} />
            </Description>

            <Button onClick={open} type="button" variants={Variants.opacity} custom={1.5}>
              <span>{t('main.salesStart.btnText')}</span>
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
                  width: 'clamp(2.50rem, calc(2.01rem + 2.44vw), 3.75rem)',
                  height: 'clamp(2.50rem, calc(2.01rem + 2.44vw), 3.75rem)',
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
                    height: 'clamp(1.56rem, calc(1.32rem + 1.22vw), 2.19rem)',
                    width: 'clamp(1.56rem, calc(1.32rem + 1.22vw), 2.19rem)',
                  },
                },
              }}
            >
              {data.images.map((item) => (
                <Carousel.Slide key={item.id}>
                  <LazyLoadImage effect="blur" src={item.thumbUrl} alt={data.title} />
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
