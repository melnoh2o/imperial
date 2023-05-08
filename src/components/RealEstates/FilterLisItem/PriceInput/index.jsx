import SliderGradient from '../SliderGradient';
import { FilterStack, FilterTitle } from '../styles';
import { FilterPriceContainer, Input, InputGroup, RangeInput } from './styles';

const PriceInput = ({ initialPrice, finalPrice, minMax, setFinalPrice, setInitialPrice }) => {
  return (
    <FilterStack>
      <FilterTitle>Цена</FilterTitle>
      <FilterPriceContainer>
        <SliderGradient initialPrice={initialPrice} finalPrice={finalPrice} max={minMax?.max} />
        <RangeInput
          value={initialPrice}
          onChange={(event) => setInitialPrice(event.target.value)}
          type="range"
          min={minMax?.min}
          max={minMax?.max}
        />
        <RangeInput
          value={finalPrice}
          onChange={(event) => setFinalPrice(event.target.value)}
          type="range"
          min={minMax?.min}
          max={minMax?.max}
        />
      </FilterPriceContainer>
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
    </FilterStack>
  );
};

export default PriceInput;
