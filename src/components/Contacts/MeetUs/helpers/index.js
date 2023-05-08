import { useId } from 'react';

const bg1 = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683133316/1_obgzvn.jpg';

export function useAddressesData() {
  const addresses = [
    {
      id: useId(),
      location: 'Северный Кипр',
      title: 'District Polatli 1, city Kyrenia, North Cyprus',
      href: '#',
      img: bg1,
    },
  ];

  return { addresses };
}
