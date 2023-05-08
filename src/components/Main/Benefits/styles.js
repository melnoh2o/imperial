import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Description, Title, TitleStack } from '../../styles';

const bg = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683285923/image_22_ikht5d.png';

export const BgWrapper = styled(motion.div)`
  position: relative;
`;

export const Bg = styled.div`
  background: url(${bg}) center/cover no-repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--black-bg3);
`;

export const InnerWrapper = styled(motion.div)`
  position: relative;
  ${({ theme }) => theme.mixins.column};
  gap: 30px;
  padding: 50px 0;
`;

export const InnerTitleStack = styled(TitleStack)`
  align-items: center;
`;

export const InnerTitle = styled(Title)`
  color: var(--white);
`;

export const InnerDescription = styled(Description)`
  width: 70%;
  color: var(--white);
  opacity: 0.8;
  text-align: center;
  margin-inline: auto;
`;

export const ListItem = styled(motion.ul)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 0.5px solid var(--gray2);
`;

export const Item = styled(motion.li)`
  padding: 45px 50px;
  text-align: center;
  border: 0.5px solid var(--gray2);
  background: transparent;

  p {
    font-size: 16px;
    color: var(--white);
    opacity: 0.9;
  }
`;
