import { useId } from 'react';
import { useTranslation } from 'react-i18next';

export function useTestimonialsData() {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: useId(),
      name: t('information.testimonials.firstItem.name'),
      profession: t('information.testimonials.firstItem.profession'),
      testimonial: t('information.testimonials.firstItem.testimonial'),
    },
    {
      id: useId(),
      name: t('information.testimonials.secondItem.name'),
      profession: t('information.testimonials.secondItem.profession'),
      testimonial: t('information.testimonials.secondItem.testimonial'),
    },
    {
      id: useId(),
      name: t('information.testimonials.thirdItem.name'),
      profession: t('information.testimonials.thirdItem.profession'),
      testimonial: t('information.testimonials.thirdItem.testimonial'),
    },
    {
      id: useId(),
      name: t('information.testimonials.fourthItem.name'),
      profession: t('information.testimonials.fourthItem.profession'),
      testimonial: t('information.testimonials.fourthItem.testimonial'),
    },
  ];

  return { testimonials };
}
