import { Modal } from '@mantine/core';

const ModalVideo = ({ isOpen, close }) => {
  const WIDTH = 800;
  const HEIGHT = 500;

  return (
    <Modal
      centered
      opened={isOpen}
      onClose={close}
      size={WIDTH}
      padding={0}
      styles={{
        content: {
          background: 'transparent',
        },
        header: {
          background: 'transparent',
        },
        close: {
          color: 'var(--white)',
          marginBottom: 10,

          '&:hover': {
            background: 'transparent',
          },
          svg: {
            width: 25,
            height: 25,
          },
        },
      }}
    >
      <iframe
        width={WIDTH}
        height={HEIGHT}
        src="https://www.youtube.com/embed/m6PQpwti-CI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Modal>
  );
};

export default ModalVideo;
