import { useState } from 'react';
import { IoMdPlay } from 'react-icons/io';

import { Variants } from '../../../constants/animation';
import { Container, Subtitle, Title, TitleStack } from '../../styles';
import Carousel from './Carousel';
import ModalVideo from './ModalVideo';
import { PlayButton, VideoBox, VideoWrapper, Wrapper } from './styles';

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalVideo isOpen={isOpen} close={() => setIsOpen(false)} />

      <Container>
        <Wrapper initial="hidden" exit="exit" whileInView="enter">
          <TitleStack>
            <Subtitle variants={Variants.opacity} custom={1.2}>
              Imperial
            </Subtitle>
            <Title variants={Variants.opacity} custom={1.3}>
              Сделаем вашу мечту о доме реальностью
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
