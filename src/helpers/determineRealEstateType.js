import { RealEstateTypes } from '../constants/realEstateTypes';

export const determineRealEstateType = (t, type) => {
  switch (type) {
    case RealEstateTypes.APARTMENT:
      return t('realEstate.filter.types.apartment');
    case RealEstateTypes.COMMERCIAL:
      return t('realEstate.filter.types.commercial');
    case RealEstateTypes.VILLA:
      return t('realEstate.filter.types.villa');
    default:
      return;
  }
};
