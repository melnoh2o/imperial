import { useId } from 'react';
import { useTranslation } from 'react-i18next';

const bg1 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683133316/1_obgzvn.jpg';

export function useAddressesData() {
  const { t } = useTranslation();

  const addresses = [
    {
      id: useId(),
      location: t('contacts.meetUs.firstItem.location'),
      title: t('contacts.meetUs.firstItem.title'),
      href: '#',
      img: bg1,
    },
  ];

  return { addresses };
}
