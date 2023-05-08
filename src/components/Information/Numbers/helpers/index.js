import { useId } from 'react';

export function useNumberData() {
  const numbers = [
    {
      id: useId(),
      numbers: '39',
      title: 'БОЛЕЕ ОБЪЕКТОВ',
      numbersPosition: {
        x: 52,
        y: 47,
      },
      titlePosition: {
        x: 54,
        y: 80,
      },
    },
    {
      id: useId(),
      numbers: '9,000',
      title: 'МЕТРОВ² ЖИЛОЙ ПЛОЩАДИ',
      numbersPosition: {
        x: 46,
        y: 47,
      },
      titlePosition: {
        x: 46,
        y: 80,
      },
    },
    {
      id: useId(),
      numbers: '835',
      title: 'ДОВОЛЬНЫХ КЛИЕНТОВ',
      numbersPosition: {
        x: 52,
        y: 35,
      },
      titlePosition: {
        x: 54,
        y: 68,
      },
    },
    {
      id: useId(),
      numbers: '2,021',
      title: 'ГОД ОСНОВАНИЯ',
      numbersPosition: {
        x: 46,
        y: 35,
      },
      titlePosition: {
        x: 46,
        y: 68,
      },
    },
  ];

  return { numbers };
}
