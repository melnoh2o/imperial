import { useId } from 'react';
import { useTranslation } from 'react-i18next';

const bg1 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683637248/Phuket11_zqqadd.jpg';
const bg2 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683462700/mountain1_j2mmpj.jpg';
const bg3 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683825350/IMG_2081_y3pf81.jpg';
const bg4 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683634389/Hawaii1_dnnkfr.jpg';
const bg5 =
  'https://res.cloudinary.com/diwpzmuai/image/upload/v1683718976/WhatsApp_Image_2023-02-08_at_09.55.43_7_upm6iv.jpg';
const bg6 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683630948/Bahamas1_x2xr7j.jpg';
export function useHotDealsData() {
  const { t } = useTranslation();

  const hotDeals = [
    {
      id: useId(),
      title: t('main.hotDeals.firstItem.title'),
      description: t('main.hotDeals.firstItem.description'),
      location: t('main.hotDeals.firstItem.location'),
      img: bg1,
      descriptions: [
        {
          id: useId(),
          description: t('main.hotDeals.firstItem.firstDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.firstItem.secondDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.firstItem.thirdDescription'),
        },
      ],
    },
    {
      id: useId(),
      title: t('main.hotDeals.secondItem.title'),
      description: t('main.hotDeals.secondItem.description'),
      location: t('main.hotDeals.secondItem.location'),
      img: bg3,
      descriptions: [
        {
          id: useId(),
          description: t('main.hotDeals.secondItem.firstDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.secondItem.secondDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.secondItem.thirdDescription'),
        },
      ],
    },
    {
      id: useId(),
      title: t('main.hotDeals.thirdItem.title'),
      description: t('main.hotDeals.thirdItem.description'),
      location: t('main.hotDeals.thirdItem.location'),
      img: bg2,
      descriptions: [
        {
          id: useId(),
          description: t('main.hotDeals.thirdItem.firstDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.thirdItem.secondDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.thirdItem.thirdDescription'),
        },
      ],
    },
    {
      id: useId(),
      title: t('main.hotDeals.fourthItem.title'),
      description: t('main.hotDeals.fourthItem.description'),
      location: t('main.hotDeals.fourthItem.location'),
      img: bg4,
      descriptions: [
        {
          id: useId(),
          description: t('main.hotDeals.fourthItem.firstDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.fourthItem.secondDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.fourthItem.thirdDescription'),
        },
      ],
    },
    {
      id: useId(),
      title: t('main.hotDeals.fifthItem.title'),
      description: t('main.hotDeals.fifthItem.description'),
      location: t('main.hotDeals.fifthItem.location'),
      img: bg5,
      descriptions: [
        {
          id: useId(),
          description: t('main.hotDeals.fifthItem.firstDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.fifthItem.secondDescription'),
        },
      ],
    },
    {
      id: useId(),
      title: t('main.hotDeals.sixthItem.title'),
      description: t('main.hotDeals.sixthItem.description'),
      location: t('main.hotDeals.sixthItem.location'),
      img: bg6,
      descriptions: [
        {
          id: useId(),
          description: t('main.hotDeals.sixthItem.firstDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.sixthItem.secondDescription'),
        },
      ],
    },
  ];

  return { hotDeals };
}
