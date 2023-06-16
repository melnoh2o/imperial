import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

import useStore from '../../../../../store';
import { ButtonGroup, Button } from './styles';

const FilterTypeButton = ({ type, types, setTypes }) => {
  const { modifiedFilterTypes, setModifiedFilterTypes } = useStore((store) => store);

  useEffect(() => {
    const selectTypes = () => {
      if (!type.isSelected) {
        const reselectValues = types.filter((it) => it !== type.value);
        setTypes(reselectValues);
      }
    };

    selectTypes();
  }, [modifiedFilterTypes]);

  const handleSetType = () => {
    if (!type.isSelected) {
      const newTypes = modifiedFilterTypes.map((it) =>
        it.value === type.value ? { ...it, isSelected: true } : it
      );
      setModifiedFilterTypes(newTypes);
      setTypes((prevState) => [...prevState, type.value]);
    }
  };

  const deselectType = () => {
    if (modifiedFilterTypes.includes(type)) {
      const deletedTypes = modifiedFilterTypes.map((it) =>
        it.value === type.value ? { ...it, isSelected: false } : it
      );
      setModifiedFilterTypes(deletedTypes);
    }
  };
  console.log({ modifiedFilterTypes });
  const isDisabled = types.length < 2 && type.isSelected;

  return (
    <ButtonGroup>
      <Button disabled={isDisabled} onClick={handleSetType} type="button">
        {type.title}
      </Button>
      <Button disabled={isDisabled} onClick={deselectType} type="button">
        {type.isSelected && <IoMdClose />}
      </Button>
    </ButtonGroup>
  );
};

export default FilterTypeButton;
