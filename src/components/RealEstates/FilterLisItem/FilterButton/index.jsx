import { useState } from 'react';

import { Checkbox, Wrapper, Label } from './styles';

const FilterButton = ({ item, values, setValue }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setValue((prevState) => [...prevState, item]);
      setIsClicked(true);
    } else {
      setIsClicked(false);
      const filteredValues = values?.filter((value) => value.id !== item.id);
      setValue(filteredValues);
    }
  };

  return (
    <Wrapper onClick={handleClick}>
      <Checkbox $isClicked={isClicked} />
      <Label>{item.name}</Label>
    </Wrapper>
  );
};

export default FilterButton;
