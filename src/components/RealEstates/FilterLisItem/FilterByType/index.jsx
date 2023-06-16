import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import useStore from '../../../../store';
import { RealEstateTypes } from '../../../../constants/realEstateTypes';
import { determineRealEstateType } from '../../../../helpers/determineRealEstateType';
import { FilterStack, FilterTitle } from '../styles';
import FilterTypeButton from './FilterTypeButton';
import { ButtonGroup } from './styles';

const FilterByType = ({ types, setTypes, isMobile }) => {
  const { t } = useTranslation();

  const { modifiedFilterTypes, setModifiedFilterTypes } = useStore((store) => store);

  useEffect(() => {
    const modifyTypes = () => {
      if (modifiedFilterTypes.length > 0) {
        setModifiedFilterTypes(modifiedFilterTypes);
      } else {
        const typesData = [RealEstateTypes.APARTMENT, RealEstateTypes.VILLA, RealEstateTypes.COMMERCIAL];
        const newTypes = typesData.map((type) => ({
          value: type,
          title: determineRealEstateType(t, type),
          isSelected: true,
        }));

        setModifiedFilterTypes(newTypes);
      }
    };

    modifyTypes();
  }, []);

  return (
    <>
      {!isMobile ? (
        <FilterStack>
          <FilterTitle>{t('realEstate.filter.type')}</FilterTitle>
          <ButtonGroup>
            {modifiedFilterTypes &&
              modifiedFilterTypes.map((type, idx) => (
                <FilterTypeButton
                  key={`${type.value}-${idx}`}
                  type={type}
                  types={types}
                  setTypes={setTypes}
                />
              ))}
          </ButtonGroup>
        </FilterStack>
      ) : (
        <ButtonGroup>
          {modifiedFilterTypes &&
            modifiedFilterTypes.map((type, idx) => (
              <FilterTypeButton key={`${type.value}-${idx}`} type={type} types={types} setTypes={setTypes} />
            ))}
        </ButtonGroup>
      )}
    </>
  );
};

export default FilterByType;
