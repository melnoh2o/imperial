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
      title: t('main.hotDeals.listFirst.title'),
      description: t('main.hotDeals.listFirst.description'),
      location: t('main.hotDeals.listFirst.location'),
      img: bg1,
      descriptions: [
        {
          id: useId(),
          description: t('main.hotDeals.listFirst.firstDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.listFirst.secondDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.listFirst.thirdDescription'),
        },
      ],
    },
    {
      id: useId(),
      title: t('main.hotDeals.listSecond.title'),
      description: t('main.hotDeals.listSecond.description'),
      location: t('main.hotDeals.listSecond.location'),
      img: bg3,
      descriptions: [
        {
          id: useId(),
          description: t('main.hotDeals.listSecond.firstDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.listSecond.secondDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.listSecond.thirdDescription'),
        },
      ],
    },
    {
      id: useId(),
      title: t('main.hotDeals.listThird.title'),
      description: t('main.hotDeals.listThird.description'),
      location: t('main.hotDeals.listThird.location'),
      img: bg2,
      descriptions: [
        {
          id: useId(),
          description: t('main.hotDeals.listThird.firstDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.listThird.secondDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.listThird.thirdDescription'),
        },
      ],
    },
    {
      id: useId(),
      title: t('main.hotDeals.listFourth.title'),
      description: t('main.hotDeals.listFourth.description'),
      location: t('main.hotDeals.listFourth.location'),
      img: bg4,
      descriptions: [
        {
          id: useId(),
          description: t('main.hotDeals.listFourth.firstDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.listFourth.secondDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.listFourth.thirdDescription'),
        },
      ],
    },
    {
      id: useId(),
      title: t('main.hotDeals.listFifth.title'),
      description: t('main.hotDeals.listFifth.description'),
      location: t('main.hotDeals.listFifth.location'),
      img: bg5,
      descriptions: [
        {
          id: useId(),
          description: t('main.hotDeals.listFifth.firstDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.listFifth.secondDescription'),
        },
      ],
    },
    {
      id: useId(),
      title: t('main.hotDeals.listSixth.title'),
      description: t('main.hotDeals.listSixth.description'),
      location: t('main.hotDeals.listSixth.location'),
      img: bg6,
      descriptions: [
        {
          id: useId(),
          description: t('main.hotDeals.listSixth.firstDescription'),
        },
        {
          id: useId(),
          description: t('main.hotDeals.listSixth.secondDescription'),
        },
      ],
    },
  ];

  return { hotDeals };
}
