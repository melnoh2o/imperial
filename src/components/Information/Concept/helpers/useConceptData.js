import { useId } from 'react';
import { useTranslation } from 'react-i18next';

const bg1 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683825341/IMG_2077_skhn9l.png';
const bg2 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683133337/information2_fxesvu.png';
const bg3 =
  'https://res.cloudinary.com/diwpzmuai/image/upload/v1686296921/310230483_200731148969979_105613259542334987_n_czanvq.jpg';

export function useConceptData() {
  const { t } = useTranslation();

  const concepts = [
    {
      id: useId(),
      title: t('information.concept.firstItem.title'),
      descriptions: [
        {
          id: useId(),
          text: t('information.concept.firstItem.firstDescription'),
        },
      ],
      img: bg1,
    },
    {
      id: useId(),
      title: t('information.concept.secondItem.title'),
      descriptions: [
        {
          id: useId(),
          text: t('information.concept.secondItem.firstDescription'),
        },
      ],
      img: bg2,
      // TODO:
      provide: {
        text: 'При выборе нашего агенства, мы предосталяем вам следующее:',
        services: [
          {
            id: useId(),
            text: 'Трансфер из Аэропорта Эрджан',
          },
          {
            id: useId(),
            text: 'Бесплатные 3 дня проживания',
          },
          {
            id: useId(),
            text: 'Экскурсия по всем интересующим вас объектам',
          },
          {
            id: useId(),
            text: 'Трансфер в Аэропорт Эрджан',
          },
        ],
      },
    },
    {
      id: useId(),
      title: t('information.concept.thirdItem.title'),
      descriptions: [
        {
          id: useId(),
          text: t('information.concept.thirdItem.firstDescription'),
        },
      ],
      img: bg3,
    },
  ];

  return { concepts };
}
