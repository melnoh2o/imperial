import { useTranslation } from 'react-i18next';
import { Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Arrow from '../Arrow';
import SliderGradient from '../SliderGradient';
import { FilterMobileButton, FilterStack, Input } from '../styles';
import { FlexContainer, InputGroup, TrackWrapper } from './styles';

const MobileRange = ({ initialPrice, finalPrice, minMax, setInitialPrice, setFinalPrice }) => {
  const { t } = useTranslation();

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <FilterStack>
      <FilterMobileButton onClick={toggle} type="button" $isActive={opened}>
        <span>{t('realEstate.filter.price')}</span>
        <Arrow isVisible={opened} />
      </FilterMobileButton>
      <Collapse in={opened}>
        <FlexContainer>
          <TrackWrapper>
            <SliderGradient initialPrice={initialPrice} finalPrice={finalPrice} max={minMax?.max} />
            <input
              value={initialPrice}
              onChange={(event) => setInitialPrice(event.target.value)}
              type="range"
              min={minMax?.min}
              max={minMax?.max}
            />
            <input
              value={finalPrice}
              onChange={(event) => setFinalPrice(event.target.value)}
              type="range"
              min={minMax?.min}
              max={minMax?.max}
            />
          </TrackWrapper>
          <InputGroup>
            <Input
              value={initialPrice}
              min={minMax?.min}
              max={minMax?.max}
              onChange={(event) => setInitialPrice(event.target.value)}
              type="number"
            />
            &nbsp;—&nbsp;
            <Input
              value={finalPrice}
              min={minMax?.min}
              max={minMax?.max}
              onChange={(event) => setFinalPrice(event.target.value)}
              type="number"
            />
          </InputGroup>
        </FlexContainer>
      </Collapse>
    </FilterStack>
  );
};

export default MobileRange;
