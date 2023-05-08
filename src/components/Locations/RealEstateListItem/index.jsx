import { useQuery } from '@tanstack/react-query';

import { RealEstatesServices } from '../../../services/realEstateServices';
import Loader from '../../Loader';
import RealEstateCard from '../../RealEstateCard';
import BackButton from '../../BackButton';
import { Container } from '../../styles/index';
import { Grid, LoaderWrapper, Wrapper } from './styles';

const RealEstateListItem = ({ location }) => {
  const { data: realEstates, isLoading } = useQuery(['filter-by-location', location], () =>
    RealEstatesServices.getByLocation(location)
  );

  return (
    <Wrapper>
      <Container>
        <LoaderWrapper $isDataExist={!!realEstates?.length}>
          {!isLoading && !!realEstates ? (
            <>
              <BackButton />
              <Grid>
                {realEstates.map((item) => (
                  <RealEstateCard key={item.id} item={item} />
                ))}
              </Grid>
            </>
          ) : (
            <Loader isAbsoluteCentered size={35} />
          )}
        </LoaderWrapper>
      </Container>
    </Wrapper>
  );
};

export default RealEstateListItem;
