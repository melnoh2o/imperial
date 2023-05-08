import { useId } from 'react';

export function useTeamData() {
  const team = [
    {
      id: useId(),
      fullName: 'Степан Яковлев',
      profession: 'Риелтор',
      text: 'Мы ценим наших клиентов и хотим, чтобы вы получили наилучший сервис и опыт работы с нами. Мы готовы работать усердно, чтобы обеспечить вам идеальное жилье на Северном Кипре. Благодарим вас за выбор нашего агентства недвижимости!',
      img: 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683133341/stepan-profile_fmvvkx.jpg',
    },
    {
      id: useId(),
      fullName: 'Максим Бабич',
      profession: 'Риелтор',
      text: 'Мы ценим наших клиентов и хотим, чтобы вы получили наилучший сервис и опыт работы с нами. Мы готовы работать усердно, чтобы обеспечить вам идеальное жилье на Северном Кипре. Благодарим вас за выбор нашего агентства недвижимости!',
      img: 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683133332/maksim-profile_eg1bil.jpg',
    },
  ];

  return { team };
}
