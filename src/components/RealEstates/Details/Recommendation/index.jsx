import { useQuery } from '@tanstack/react-query';
import { Carousel } from '@mantine/carousel';

import { Variants } from '../../../../constants/animation';
import { RealEstatesServices } from '../../../../services/realEstateServices';
import RealEstateCard from '../../../RealEstateCard';
import { Title, Wrapper } from './styles';

const Recommendation = ({ currentItemId, developer }) => {
  const { data: realEstate } = useQuery(['filter-by-developer', developer], () =>
    RealEstatesServices.getByDeveloper(developer)
  );

  const filteredItems = realEstate?.filter((item) => item.id !== currentItemId);

  return (
    <>
      {filteredItems && filteredItems.length ? (
        <Wrapper variants={Variants.container} initial="hidden" whileInView="visible">
          <Title variants={Variants.item}>СВЯЗАННЫЕ НЕДВИЖИМОСТИ</Title>
          <Carousel
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={3}
            styles={{
              controls: {
                top: -56,
                right: 0,
                left: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: 10,

                '@media (min-width: 320px)': {
                  top: -70,
                },

                '@media (min-width: 480px)': {
                  top: -60,
                },
              },

              control: {
                width: 40,
                height: 40,
                color: 'var(--black)',
                borderRadius: 0,
                border: '2px solid var(--black)',
                background: 'transparent',
                transition: 'var(--transition)',

                '&:hover': {
                  color: 'var(--white)',
                  background: 'var(--black)',
                },

                '&:active': {
                  color: 'var(--white)',
                  background: 'var(--black)',
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
            }}
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%' },
            ]}
          >
            {filteredItems.map((item) => (
              <Carousel.Slide key={item.id}>
                <RealEstateCard item={item} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Wrapper>
      ) : null}
    </>
  );
};

export default Recommendation;
