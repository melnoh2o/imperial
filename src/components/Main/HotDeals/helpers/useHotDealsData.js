import { useId } from 'react';

const bg1 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683637248/Phuket11_zqqadd.jpg';
const bg2 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683462700/mountain1_j2mmpj.jpg';
const bg3 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683825350/IMG_2081_y3pf81.jpg';
const bg4 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683634389/Hawaii1_dnnkfr.jpg';
const bg5 =
  'https://res.cloudinary.com/diwpzmuai/image/upload/v1683718976/WhatsApp_Image_2023-02-08_at_09.55.43_7_upm6iv.jpg';
const bg6 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683630948/Bahamas1_x2xr7j.jpg';
export function useHotDealsData() {
  const hotDeals = [
    {
      id: useId(),
      title: 'PHUKET HEALTH & WELLNESS RESORT',
      description:
        'Пхукет — это место, где вы можете почувствовать кусочек Таиланда. Проект предлагает образ здорового образа жизни, так как здесь много пешеходных дорожек, велосипедных маршрутов, спортивных площадок, тренажерного зала, зон для медитации и йоги, спа и бассейнов.',
      location: 'Татлысу',
      img: bg1,
      descriptions: [
        {
          id: useId(),
          description: '1+0 апартаменты - от 35 м²',
        },
        {
          id: useId(),
          description: '1+1 апартаменты - от 50 м²',
        },
        {
          id: useId(),
          description: '2+1 апартаменты - от 75 м²',
        },
      ],
    },
    {
      id: useId(),
      title: 'CASA DEL MARE',
      description:
        'Благодаря удобству транспортировки, обеспечиваемому близостью к аэропорту, отличному расстоянию до Кирении и расположению Casa del Mare на берегу моря, вы будете жить в великолепном районе. Жизнь здесь прекрасна: море, солнце, песок, отдых и смех на фоне лазурных пейзажей Средиземного моря.',
      location: 'Эсентепе',
      img: bg3,
      descriptions: [
        {
          id: useId(),
          description: '1+0 апартаменты - от 82 м²',
        },
        {
          id: useId(),
          description: '1+1 апартаменты - от 112 м²',
        },
        {
          id: useId(),
          description: '2+1 апартаменты - от 92 м²',
        },
      ],
    },
    {
      id: useId(),
      title: 'MOUNTAİN HİLL 2',
      description:
        'Новый строящийся комплекс «Mountaın Hıll-2» будет расположен в 10 км от Кирении в уютном поселке Алсанджак, в горах. Наш Комплекс будет расположен в 3 км от моря, в Киренийских горах. Большим преимуществом расположения Комплекса будут бесподобный горный, свежий воздух и восхитительные, завораживающие панорамные виды на море. ',
      location: 'Алсанджак',
      img: bg2,
      descriptions: [
        {
          id: useId(),
          description: '1+1 апартаменты - от 45 м²',
        },
        {
          id: useId(),
          description: '1+1 апартаменты - от 70 м²',
        },
        {
          id: useId(),
          description: 'Duplex 2+1 апартаменты - от 70 м²',
        },
      ],
    },
    {
      id: useId(),
      title: 'Hawaii Homes',
      description:
        'Добро пожаловать в Hawaii Homes! Hawaii Homes - это крупнейший на Кипре жилой проект на берегу моря со студиями, мансардными пентхаусами 1+1, 2+1 и роскошными виллами с 3 спальнями, общим количеством 500 квартир.',
      location: 'Эсентепе',
      img: bg4,
      descriptions: [
        {
          id: useId(),
          description: '1+0 апартаменты - от 35 м²',
        },
        {
          id: useId(),
          description: '1+1 апартаменты - от 50 м²',
        },
        {
          id: useId(),
          description: '2+1 апартаменты - от 75 м²',
        },
      ],
    },
    {
      id: useId(),
      title: 'AVANGART PLUS',
      description:
        'Наш проект «Авангарт Плюс» состоит из 3 блоков и 47 квартир. Все блоки состоят из парковки, 3-х обычных этажей и мансарды. Каждый блок имеет свой крытый навес. Все квартиры имеют полезные террасы.',
      location: 'Гирне',
      img: bg5,
      descriptions: [
        {
          id: useId(),
          description: '2+1 апартаменты - от 95 м²',
        },
        {
          id: useId(),
          description: '3+1 апартаменты - от 110 м²',
        },
      ],
    },
    {
      id: useId(),
      title: 'BAHAMAS THREE',
      description:
        'Расположенный на востоке Кирении, Bahamas Homes предлагает вам Багамские острова. Благодаря современному и уникальному дизайну, разнообразию типов и всем удобствам, которые он может предложить, Bahamas Homes, несомненно, привлекает внимание.',
      location: 'Эсентепе',
      img: bg6,
      descriptions: [
        {
          id: useId(),
          description: '1+0 апартаменты - от 35 м²',
        },
        {
          id: useId(),
          description: 'Penthouse 2+1 апартаменты - от 75 м²',
        },
      ],
    },
  ];

  return { hotDeals };
}
