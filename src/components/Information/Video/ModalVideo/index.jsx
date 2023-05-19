import { Modal } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const ModalVideo = ({ isOpen, close }) => {
  const smallSize = useMediaQuery('(min-width: 320px)');
  const mediumSize = useMediaQuery('(min-width: 576px)');
  const largeSize = useMediaQuery('(min-width: 768px)');

  const smHeight = smallSize && 250;
  const msHeight = mediumSize && 350;
  const lgHeight = largeSize && 400;

  return (
    <Modal
      centered
      opened={isOpen}
      onClose={close}
      size="xl"
      padding={0}
      styles={{
        content: {
          background: 'transparent',
        },
        header: {
          background: 'transparent',
        },
        body: {
          height: 'calc(100vh - 400px)',
          overflow: 'hidden',
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
        width="100%"
        height="100%"
        src="https://youtu.be/b91b9U37geU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Modal>
  );
};

export default ModalVideo;
