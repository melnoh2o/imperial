import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdPlay } from 'react-icons/io';

import { Variants } from '../../../constants/animation';
import { Container, Subtitle, Title, TitleStack } from '../../styles';
import Carousel from './Carousel';
import ModalVideo from './ModalVideo';
import { PlayButton, VideoBox, VideoWrapper, Wrapper } from './styles';

const Video = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalVideo isOpen={isOpen} close={() => setIsOpen(false)} />

      <Container>
        <Wrapper initial="hidden" exit="exit" whileInView="enter">
          <TitleStack>
            <Subtitle variants={Variants.opacity} custom={1.2}>
              {t('information.video.subtitle')}
            </Subtitle>
            <Title variants={Variants.opacity} custom={1.3}>
              {t('information.video.title')}
            </Title>
          </TitleStack>
          <VideoWrapper>
            <VideoBox variants={Variants.opacity} custom={1.3}>
              <PlayButton
                type="button"
                onClick={() => setIsOpen(true)}
                variants={Variants.opacity}
                custom={1.4}
              >
                <IoMdPlay />
              </PlayButton>
            </VideoBox>
            <Carousel />
          </VideoWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Video;
