import { Modal } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const ModalVideo = ({ isOpen, close }) => {
  const smallSize = useMediaQuery('(min-width: 320px)');
  const WIDTH = 800;
  const HEIGHT = 500;

  const smWidth = smallSize && 350;
  const smHeight = smallSize && 250;

  return (
    <Modal
      centered
      opened={isOpen}
      onClose={close}
      size="90%"
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
        width={smWidth}
        height={smHeight}
        src="https://www.youtube.com/embed/m6PQpwti-CI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Modal>
  );
};

export default ModalVideo;
