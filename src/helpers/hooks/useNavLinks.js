import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi';

import { Paths } from '../../constants/Paths';

export function useNavLinks() {
  const { t } = useTranslation();

  const navLinks = [
    {
      id: useId(),
      path: Paths.MAIN,
      title: t('layout.header.main'),
    },
    {
      id: useId(),
      path: Paths.LOCATIONS,
      title: t('layout.header.locations'),
    },
    {
      id: useId(),
      path: Paths.REAL_ESTATES,
      title: t('layout.header.realEstates'),
    },
    {
      id: useId(),
      path: Paths.INFORMATION,
      title: t('layout.header.information'),
    },
    {
      id: useId(),
      path: Paths.INVESTMENT_TOUR,
      title: t('layout.header.investmentTour'),
    },
    {
      id: useId(),
      path: Paths.CONTACTS,
      title: t('layout.header.contacts'),
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
      path: 'https://www.instagram.com/imperialkktc/?next=%2Fimperialkktc%2F',
    },
    {
      id: useId(),
      icon: TfiYoutube,
      path: 'https://www.youtube.com/channel/UCG9tdO0vEhGsBIqq0YfIw0A',
    },
  ];

  const contacts = [
    {
      id: useId(),
      header: t('layout.footer.phone'),
      title: '+905338879769',
      path: 'tel://1234567920',
    },
    {
      id: useId(),
      header: t('layout.footer.mail'),
      title: 'imperialkktc@gmail.com',
      path: 'mailto:info@yoursite.com',
    },
    {
      id: useId(),
      header: t('layout.footer.address.header'),
      title: t('layout.footer.address.title'),
      path: '#',
    },
  ];

  return { navLinks, socialLinks, contacts };
}
