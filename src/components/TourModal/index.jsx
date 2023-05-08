import { useId } from 'react';
import { Modal, Stack } from '@mantine/core';

import useStore from '../../store';
import ModalForm from './ModalForm';
import { Subtitle, Title } from './styles';

const TourModal = () => {
  const isOpen = useStore((state) => state.isOpen);
  const onClose = useStore((state) => state.close);

  const data = [
    {
      id: useId(),
      title: 'Инвестиционный тур по Северному Кипру',
    },
    {
      id: useId(),
      title: 'Трансфер 3-7 дней',
    },
  ];

  return (
    <Modal
      centered
      opened={isOpen}
      onClose={onClose}
      size="lg"
      styles={{
        inner: {
          zIndex: 2000,
        },
        content: {
          borderRadius: 0,
        },
        body: {
          padding: '1rem 3rem 2rem !important',
        },
        close: {
          width: 25,
          height: 25,
          borderRadius: 0,
          transition: 'var(--transition)',

          svg: {
            width: 25,
            height: 25,
            color: 'var(--black)',
          },

          '&:hover': {
            background: 'var(--black)',

            svg: {
              color: 'var(--white)',
            },
          },
        },
      }}
    >
      <Stack spacing={24}>
        <Stack spacing={21}>
          <Title>Долгожданный инвестиционный тур по Северному Кипру</Title>
          <Stack spacing={2} align="center">
            {data.map((item) => (
              <Subtitle key={item.id}>• {item.title}</Subtitle>
            ))}
          </Stack>
        </Stack>
        <ModalForm />
      </Stack>
    </Modal>
  );
};

export default TourModal;
