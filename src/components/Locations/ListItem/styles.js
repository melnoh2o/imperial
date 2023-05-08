import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  padding: 70px 0;
`;

export const FlexContainer = styled(motion.div)`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;
