import { useId } from 'react';

export function useNumberData() {
  const numbers = [
    {
      id: useId(),
      numbers: '39',
      title: 'БОЛЕЕ ОБЪЕКТОВ',
    },
    {
      id: useId(),
      numbers: '9000',
      title: 'МЕТРОВ² ЖИЛОЙ ПЛОЩАДИ',
    },
    {
      id: useId(),
      numbers: '835',
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
