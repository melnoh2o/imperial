import { useId } from 'react';

export function useNumberData() {
  const numbers = [
    {
      id: useId(),
      numbers: '45',
      title: 'И БОЛЕЕ ОБЪЕКТОВ',
    },
    {
      id: useId(),
      numbers: '9000',
      title: 'МЕТРОВ² ЖИЛОЙ ПЛОЩАДИ',
    },
    {
      id: useId(),
      numbers: '350',
      title: 'ДОВОЛЬНЫХ КЛИЕНТОВ',
    },
    {
      id: useId(),
      numbers: '2021',
      title: 'ГОД ОСНОВАНИЯ',
    },
  ];

  return { numbers };
}
