import { useState } from 'react';
import { Stack } from '@mantine/core';

import FilterButton from '../FilterButton';
import { FilterStack, FilterTitle } from '../styles';
import { ShowMore } from './styles';

const Item = ({ data, values, setValues, label }) => {
  const [isSliced, setIsSliced] = useState(true);

  return (
    <FilterStack>
      <FilterTitle>{label}</FilterTitle>
      <Stack spacing={4}>
        {data.slice(0, isSliced ? 10 : -1).map((item) => (
          <FilterButton key={item.id} item={item} values={values} setValue={setValues} />
        ))}
      </Stack>
      {data?.length > 10 && (
        <ShowMore onClick={() => setIsSliced(!isSliced)}>{isSliced ? 'Показать все' : 'Скрыть все'}</ShowMore>
      )}
    </FilterStack>
  );
};

export default Item;
