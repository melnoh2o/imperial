import { useId } from 'react';
import { useTranslation } from 'react-i18next';

export function useBenefitData() {
  const { t } = useTranslation();

  const benefits = [
    {
      id: useId(),
      text: t('main.benefits.firstText'),
    },
    {
      id: useId(),
      text: t('main.benefits.secondText'),
    },
    {
      id: useId(),
      text: t('main.benefits.thirdText'),
    },
    {
      id: useId(),
      text: t('main.benefits.fourthText'),
    },
    {
      id: useId(),
      text: t('main.benefits.fifthText'),
    },
    {
      id: useId(),
      text: t('main.benefits.sixthText'),
    },
  ];

  return { benefits };
}
