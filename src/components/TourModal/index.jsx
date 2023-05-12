import { useId } from 'react';
import { Modal, Stack as MantieneStack } from '@mantine/core';

import useStore from '../../store';
import ModalForm from './ModalForm';
import { Stack, Subtitle, Title } from './styles';

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
          padding:
            'clamp(0.00rem, calc(-0.39rem + 1.95vw), 1.00rem) clamp(1.56rem, calc(1.00rem + 2.80vw), 3.00rem) 2rem !important',
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
      <MantieneStack spacing={24}>
        <Stack>
          <Title>Бесплатный инвестиционный тур по Северному Кипру</Title>
          <MantieneStack spacing={2} align="center">
            {data.map((item) => (
              <Subtitle key={item.id}>• {item.title}</Subtitle>
            ))}
          </MantieneStack>
        </Stack>
        <ModalForm />
      </MantieneStack>
    </Modal>
  );
};

export default TourModal;
