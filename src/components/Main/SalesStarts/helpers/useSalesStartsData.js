import { useId } from 'react';
import { useTranslation } from 'react-i18next';

export function useSalesStartsData() {
  const { t } = useTranslation();

  const data = {
    id: useId(),
    title: t('main.salesStart.listFirst.title'),
    year: 2025,
    location: t('main.salesStart.listFirst.location'),
    description1: t('main.salesStart.listFirst.description1'),
    description2: t('main.salesStart.listFirst.description2'),
    images: [
      {
        id: useId(),
        thumbUrl:
          'https://res.cloudinary.com/diwpzmuai/image/upload/v1683457772/photo_2023-05-07_14-08-48_zsjdfl.jpg',
      },
      {
        id: useId(),
        thumbUrl:
          'https://res.cloudinary.com/diwpzmuai/image/upload/v1683829140/1yfhyp_s5zcn6dv-ppsezqy-y7aki4cc5_1_.com_d_1yfhyp_s5zcn6dv_ppsezqy_y7aki4cc5_xxeewy.jpg',
      },
    ],
  };

  return { data };
}
