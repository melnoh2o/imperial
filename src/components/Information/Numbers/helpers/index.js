import { useId } from 'react';
import { useTranslation } from 'react-i18next';

export function useNumberData() {
  const { t } = useTranslation();

  const numbers = [
    {
      id: useId(),
      numbers: '45',
      title: t('information.numbers.firstItem.title'),
    },
    {
      id: useId(),
      numbers: '9000',
      title: t('information.numbers.secondItem.title'),
    },
    {
      id: useId(),
      numbers: '350',
      title: t('information.numbers.thirdItem.title'),
    },
    {
      id: useId(),
      numbers: '2021',
      title: t('information.numbers.fourthItem.title'),
    },
  ];

  return { numbers };
}
