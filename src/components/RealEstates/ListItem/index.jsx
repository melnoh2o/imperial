import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';

import { Variants } from '../../../constants/animation';
import { RealEstatesServices } from '../../../services/realEstateServices.js';
import { useDebounce } from '../../../helpers/hooks/useDebounce';
import RealEstateCard from '../../RealEstateCard';
import { useSetToLocalStorage } from './helpers/useSetToLocalStorage';
import PaginationButtons from './PaginationButtons';
import Loader from './Loader';
import { Grid, NotFoundTitle, Wrapper } from './styles';

const ListItems = ({ initialPrice, finalPrice, developers, locations, handovers }) => {
  const [currentPage, setCurrentPage] = useState(JSON.parse(localStorage.getItem('page')) || 1);
  const [developerParam, setDeveloperParam] = useState('');
  const [locationParam, setLocationParam] = useState('');
  const [handoverParam, setHandoverParam] = useState('');
  const [startPrice, setStartPrice] = useState('');
  const [endPrice, setEndPrice] = useState('');

  const { t } = useTranslation();

  const searchPriceStart = useDebounce(initialPrice, 500);
  const searchPriceEnd = useDebounce(finalPrice, 500);

  const { data: realEstates, isLoading } = useQuery(
    ['items', currentPage, developerParam, locationParam, handoverParam, startPrice, endPrice],
    () =>
      RealEstatesServices.getAllRealEstate(
        currentPage,
        developerParam,
        locationParam,
        handoverParam,
        startPrice,
        endPrice
      )
  );

  useEffect(() => {
    const isDeveloperParam = !!developers.length
      ? developers.map((developer) => `&developer=${developer.value}`).join('')
      : '';
    setDeveloperParam(isDeveloperParam);
    const isLocationParam = !!locations.length
      ? locations.map((location) => `&location=${location.value}`).join('')
      : '';
    setLocationParam(isLocationParam);
    const isHandoverParam = !!handovers.length
      ? handovers.map((handover) => `&handover=${handover.value}`).join('')
      : '';
    setHandoverParam(isHandoverParam);
    const isStartPrice = searchPriceStart ? `&initialPrice=${searchPriceStart}` : '';
    const isFinalPrice = searchPriceEnd ? `&finalPrice=${searchPriceEnd}` : '';
    setStartPrice(isStartPrice);
    setEndPrice(isFinalPrice);
  }, [developers, locations, handovers, currentPage, searchPriceStart, searchPriceEnd]);

  useSetToLocalStorage(
    developers,
    locations,
    handovers,
    currentPage,
    searchPriceStart,
    searchPriceEnd,
    setCurrentPage
  );

  return (
    <Wrapper>
      {!isLoading && !!realEstates ? (
        <>
          {realEstates?.totalQuantity === 0 ? (
            <NotFoundTitle>{t('realEstate.notFoundTitle')}</NotFoundTitle>
          ) : null}
          <Grid variants={Variants.container} initial="hidden" animate="visible" viewport={{ once: true }}>
            {realEstates?.data?.map((item) => (
              <RealEstateCard key={item.id} item={item} />
            ))}
          </Grid>
          <PaginationButtons
            pages={Array.from({ length: realEstates.totalPages }, (_, index) => index + 1)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isLoading={isLoading}
          />
        </>
      ) : (
        <Loader isAbsoluteCentered={true} />
      )}
    </Wrapper>
  );
};

export default ListItems;
