import { useId } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi';

import { Paths } from '../../constants/Paths';

export function useNavLinks() {
  const navLinks = [
    {
      id: useId(),
      path: Paths.MAIN,
      title: 'Главная',
    },
    {
      id: useId(),
      path: Paths.LOCATIONS,
      title: 'Локации',
    },
    {
      id: useId(),
      path: Paths.REAL_ESTATES,
      title: 'Недвижимость',
    },
    {
      id: useId(),
      path: Paths.INFORMATION,
      title: 'Информация',
    },
    {
      id: useId(),
      path: Paths.INVESTMENT_TOUR,
      title: 'Инвестиционный тур',
    },
    {
      id: useId(),
      path: Paths.CONTACTS,
      title: 'Контакты',
    },
  ];

  const socialLinks = [
    {
      id: useId(),
      icon: FaTelegramPlane,
      path: 'https://t.me/CorporationImperialBot',
    },
    {
      id: useId(),
      icon: BsWhatsapp,
      path: 'https://api.whatsapp.com/send?phone=905338879769',
    },
    {
      id: useId(),
      icon: BsInstagram,
      path: 'https://instagram.com/imperial__corporation?igshid=ZGUzMzM3NWJiOQ==',
    },
    {
      id: useId(),
      icon: TfiYoutube,
      path: 'https://www.youtube.com/@StepanIakovlev',
    },
  ];

  const contacts = [
    {
      id: useId(),
      header: 'ТЕЛЕФОН',
      title: '+905338879769',
      path: 'tel://1234567920',
    },
    {
      id: useId(),
      header: 'ПОЧТА',
      title: 'imperialkktc@gmail.com',
      path: 'mailto:info@yoursite.com',
    },
    {
      id: useId(),
      header: 'Адресс',
      title: 'District Polatli 1, city Kyrenia, North Cyprus',
      path: '#',
    },
  ];

  return { navLinks, socialLinks, contacts };
}
