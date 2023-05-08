import { motion } from 'framer-motion';
import styled from 'styled-components';

const footerBg = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683133295/footer-bg_ibqkyj.jpg';

export const Wrapper = styled(motion.footer)`
  position: relative;
  padding: 140px 0 140px;
  background: black url(${footerBg}) center/cover no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.8;
  }
`;
