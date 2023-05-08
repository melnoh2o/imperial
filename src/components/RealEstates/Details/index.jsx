import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

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

  const { data: realEstate, isLoading } = useQuery(['filer-values', id], () =>
    RealEstatesServices.getRealEstateById(id || 0)
  );

  return (
    <Wrapper>
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

                  <Recommendation currentItemId={realEstate.id} developer={realEstate.developer} />
                </FlexContainer>

                <PriceDescription prices={realEstate.prices} />
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
