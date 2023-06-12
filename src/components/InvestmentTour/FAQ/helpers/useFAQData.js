import { useId } from 'react';
import { useTranslation } from 'react-i18next';

export function useFAQData() {
  const { t } = useTranslation();

  const data = [
    {
      id: useId(),
      question: t('investmentTour.FAQ.firstItem.question'),
      answer: t('investmentTour.FAQ.firstItem.answer'),
    },
    {
      id: useId(),
      question: t('investmentTour.FAQ.secondItem.question'),
      answer: t('investmentTour.FAQ.secondItem.answer'),
    },
    {
      id: useId(),
      question: t('investmentTour.FAQ.thirdItem.question'),
      answer: t('investmentTour.FAQ.thirdItem.answer'),
    },
    {
      id: useId(),
      question: t('investmentTour.FAQ.fourthItem.question'),
      answer: t('investmentTour.FAQ.fourthItem.answer'),
    },
    {
      id: useId(),
      question: t('investmentTour.FAQ.fifthItem.question'),
      answer: t('investmentTour.FAQ.fifthItem.answer'),
    },
  ];

  return { data };
}
