import { Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Arrow from '../Arrow';
import FilterButton from '../FilterButton';
import { FilterMobileButton, FilterStack } from '../styles';
import { FilterMobileListContainer } from './styles';

const MobileItem = ({ data, values, setValue, label }) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <FilterStack>
      <FilterMobileButton onClick={toggle} type="button" $isActive={opened}>
        <span>{label}</span>
        <Arrow isVisible={opened} />
      </FilterMobileButton>
      <Collapse in={opened}>
        <FilterMobileListContainer>
          {data.map((item) => (
            <FilterButton key={item.id} item={item} values={values} setValue={setValue} />
          ))}
        </FilterMobileListContainer>
      </Collapse>
    </FilterStack>
  );
};

export default MobileItem;
