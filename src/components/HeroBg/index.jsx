import { Stack } from '@mantine/core';

import { Variants } from '../../constants/animation';
import { Container } from '../styles/index';
import { ContentWrapper, Overlay, Title, Wrapper, Subtitle } from './styles';

const HeroBg = ({ url, title, subtitle }) => {
  return (
    <Wrapper $imgUrl={url}>
      <Overlay />
      <ContentWrapper>
        <Container>
          <Stack spacing={24}>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </Subtitle>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </Title>
          </Stack>
        </Container>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroBg;
