import { useDisclosure } from '@mantine/hooks';
import { Box, Collapse } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { FilterMobileButton, FilterStack } from '../styles';
import FilterByType from '../FilterByType';
import Arrow from '../Arrow';

const MobileByType = ({ types, setTypes }) => {
  const { t } = useTranslation();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <FilterStack>
      <FilterMobileButton onClick={toggle} type="button" $isActive={opened}>
        <span>{t('realEstate.filter.type')}</span>
        <Arrow isVisible={opened} />
      </FilterMobileButton>
      <Collapse in={opened}>
        <Box pb={15}>
          <FilterByType types={types} setTypes={setTypes} isMobile />
        </Box>
      </Collapse>
    </FilterStack>
  );
};

export default MobileByType;
