import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { useMediaQuery } from '@mantine/hooks';

import { RealEstatesServices } from '../../../services/realEstateServices';
import { Variants } from '../../../constants/animation';
import MobileRange from './MobileRange';
import MobileItem from './MobileItem';
import Item from './Item';
import PriceInput from './PriceInput';
import { FilterMobileTitle, FilterMobileWrapper, FilterWrapper } from './styles';

const FilterListItem = ({
  developers,
  setDevelopers,
  handovers,
  setHandovers,
  locations,
  setLocations,
  initialPrice,
  setInitialPrice,
  finalPrice,
  setFinalPrice,
  minMax,
}) => {
  const { t } = useTranslation();

  const matches = useMediaQuery('(min-width: 1024px)');

  const { data } = useQuery(['filer-values'], () => RealEstatesServices.getFilterValues());

  return (
    <>
      {!matches && (
        <FilterMobileWrapper>
          <FilterMobileTitle>{t('realEstate.mobileFilter.title')}</FilterMobileTitle>
          <MobileRange
            initialPrice={initialPrice}
            finalPrice={finalPrice}
            minMax={minMax}
            setFinalPrice={setFinalPrice}
            setInitialPrice={setInitialPrice}
          />
          {!!data && !!data.developers && (
            <MobileItem
              data={data.developers}
              values={developers}
              setValue={setDevelopers}
              label={t('realEstate.filter.developer')}
            />
          )}

          {!!data && !!data.locations && (
            <MobileItem
              data={data.locations}
              values={locations}
              setValue={setLocations}
              label={t('realEstate.filter.locations')}
            />
          )}

          {!!data && !!data.handovers && (
            <MobileItem
              data={data.handovers}
              values={handovers}
              setValue={setHandovers}
              label={t('realEstate.filter.handover')}
            />
          )}
        </FilterMobileWrapper>
      )}
      {matches && (
        <FilterWrapper
          initial="hidden"
          exit="exit"
          whileInView="enter"
          variants={Variants.opacity}
          custom={1.2}
        >
          <PriceInput
            initialPrice={initialPrice}
            finalPrice={finalPrice}
            minMax={minMax}
            setFinalPrice={setFinalPrice}
            setInitialPrice={setInitialPrice}
          />

          {!!data && !!data.developers && (
            <Item
              data={data.developers}
              values={developers}
              setValues={setDevelopers}
              label={t('realEstate.filter.developer')}
            />
          )}

          {!!data && !!data.locations && (
            <Item
              data={data.locations}
              values={locations}
              setValues={setLocations}
              label={t('realEstate.filter.locations')}
            />
          )}

          {!!data && !!data.handovers && (
            <Item
              data={data.handovers}
              values={handovers}
              setValues={setHandovers}
              label={t('realEstate.filter.handover')}
            />
          )}
        </FilterWrapper>
      )}
    </>
  );
};

export default FilterListItem;
