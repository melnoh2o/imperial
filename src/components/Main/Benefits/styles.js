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
  gap: var(--gap30);
  padding: clamp(2.81rem, calc(2.69rem + 0.61vw), 3.13rem) 0;

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 80%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 85%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 100%;
  }
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

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
  }
`;

export const ListItem = styled(motion.ul)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 0.5px solid var(--gray2);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 80%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpSmall} {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }

  @media ${({ theme }) => theme.bp.bpMedium} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Item = styled(motion.li)`
  padding: clamp(1.88rem, calc(1.51rem + 1.83vw), 2.81rem) clamp(2.19rem, calc(1.82rem + 1.83vw), 3.13rem);
  text-align: center;
  border: 0.5px solid var(--gray2);
  background: transparent;

  p {
    font-size: 16px;
    color: var(--white);
    opacity: 0.9;
  }
`;
