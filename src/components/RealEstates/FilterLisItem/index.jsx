import { useQuery } from '@tanstack/react-query';

import { RealEstatesServices } from '../../../services/realEstateServices';
import { useMediaQuery } from '../../../helpers/hooks/useMediaQuery';
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
  const matches = useMediaQuery('(max-width: 970px)');

  const { data } = useQuery(['filer-values'], () => RealEstatesServices.getFilterValues());

  return (
    <>
      {matches ? (
        <FilterMobileWrapper>
          <FilterMobileTitle>Фильтр</FilterMobileTitle>
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
              label="Застройщик"
            />
          )}

          {!!data && !!data.locations && (
            <MobileItem data={data.locations} values={locations} setValue={setLocations} label="Локация" />
          )}

          {!!data && !!data.handovers && (
            <MobileItem data={data.handovers} values={handovers} setValue={setHandovers} label="Дата сдачи" />
          )}
        </FilterMobileWrapper>
      ) : (
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
            <Item data={data.developers} values={developers} setValues={setDevelopers} label="Застройщик" />
          )}

          {!!data && !!data.locations && (
            <Item data={data.locations} values={locations} setValues={setLocations} label="Локация" />
          )}

          {!!data && !!data.handovers && (
            <Item data={data.handovers} values={handovers} setValues={setHandovers} label="Дата сдачи" />
          )}
        </FilterWrapper>
      )}
    </>
  );
};

export default FilterListItem;
