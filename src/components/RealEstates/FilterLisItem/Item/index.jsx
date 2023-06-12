import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mantine/core';

import FilterButton from '../FilterButton';
import { FilterStack, FilterTitle } from '../styles';
import { ShowMore } from './styles';

const Item = ({ data, values, setValues, label }) => {
  const { t } = useTranslation();

  const [isSliced, setIsSliced] = useState(true);
  const slicedRealEstates = isSliced ? data.slice(0, 10) : data.slice(0);

  return (
    <FilterStack>
      <FilterTitle>{label}</FilterTitle>
      <Stack spacing={4}>
        {slicedRealEstates.map((item) => (
          <FilterButton key={item.id} item={item} values={values} setValue={setValues} />
        ))}
      </Stack>
      {data?.length > 10 && (
        <ShowMore onClick={() => setIsSliced(!isSliced)}>
          {isSliced ? t('realEstate.filter.showAll') : t('realEstate.filter.hideAll')}
        </ShowMore>
      )}
    </FilterStack>
  );
};

export default Item;
