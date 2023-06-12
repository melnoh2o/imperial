import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useMediaQuery } from '@mantine/hooks';

import useStore from '../../../store';
import { RealEstatesServices } from '../../../services/realEstateServices';
import { Container } from '../../styles/index';
import Loader from '../../Loader';
import BackButton from '../../BackButton';
import Carousel from './Carousel';
import PriceDescription from './PriceDescription';
import Descriptions from './Descriptions';
import Recommendation from './Recommendation';
import { FlexContainer, BodyWrapper, Wrapper, Group, LoaderWrapper } from './styles';

const Details = () => {
  const { id } = useParams();
  const { lang } = useStore();

  const matches = useMediaQuery('(max-width:  768px)');

  const { data: realEstate, isLoading } = useQuery(['filer-values', id, lang], () =>
    RealEstatesServices.getRealEstateById(id || 0, lang)
  );

  return (
    <Wrapper $isBoth>
      <Container>
        <LoaderWrapper>
          {!isLoading && !!realEstate ? (
            <>
              <BackButton />
              <Group initial="hidden" exit="exit" whileInView="enter">
                <FlexContainer>
                  <BodyWrapper>
                    <Carousel images={realEstate.images} />
                    <Descriptions realEstate={realEstate} />
                  </BodyWrapper>

                  {matches ? <PriceDescription prices={realEstate.prices} /> : null}

                  <Recommendation currentItemId={realEstate.id} developer={realEstate.developer} />
                </FlexContainer>

                {!matches ? <PriceDescription prices={realEstate.prices} /> : null}
              </Group>
            </>
          ) : (
            <Loader isAbsoluteCentered size={35} />
          )}
        </LoaderWrapper>
      </Container>
    </Wrapper>
  );
};

export default Details;
