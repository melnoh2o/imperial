import { useId } from 'react';
import { useTranslation } from 'react-i18next';

export function useTourCardData() {
  const { t } = useTranslation();

  const data = [
    {
      id: useId(),
      description: t('investmentTour.tourCard.firstItem.description'),
    },
    {
      id: useId(),
      description: t('investmentTour.tourCard.secondItem.description'),
    },
    {
      id: useId(),
      description: t('investmentTour.tourCard.thirdItem.description'),
    },
  ];

  return { data };
}
