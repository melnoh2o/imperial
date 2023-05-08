import { motion } from 'framer-motion';

import { Container } from '../styles/index';
import { Overlay, Title, Wrapper } from './styles';

const SmallHeroBg = ({ imgUrl, title }) => {
  return (
    <Wrapper $imgUrl={imgUrl}>
      <Overlay />
      <Container>
        <motion.div style={{ position: 'relative' }}>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </Title>
        </motion.div>
      </Container>
    </Wrapper>
  );
};

export default SmallHeroBg;
