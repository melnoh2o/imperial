import { useId } from 'react';

export function useSalesStartsData() {
  const data = {
    id: useId(),
    title: 'ELYSIUM',
    year: 2025,
    location: 'Искеле',
    description1:
      ' В продажу вернулся один таунхаус с видом на бассейн! 385 000 GBP. Готовность ноябрь 2025 года. Рассрочка 36 месяцев.',
    description2: 'В продаже: <br />Апартаменты с ремонтом 220м² жилой площади.',
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
