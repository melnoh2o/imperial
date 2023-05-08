import { motion } from 'framer-motion';
import styled from 'styled-components';

const bgImg = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683133345/services-bg_mdnxib.jpg';

export const Wrapper = styled(motion.section)`
  position: relative;
  ${({ theme }) => theme.mixins.column};
  gap: 70px;
  padding: 70px 0 160px;
`;

export const ServiceBg = styled.div`
  height: 468px;
  background: url(${bgImg}) center/cover no-repeat;
`;

export const Overlay = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 128px;
`;

export const Stack = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 50px;
`;

export const Subtitle = styled(motion.p)`
  ${({ theme }) => theme.mixins.fontSize14}
  letter-spacing: 4.5px;
  font-weight: 300;
  color: var(--white);
`;

export const Title = styled(motion.h4)`
  ${({ theme }) => theme.mixins.fontSize40}
  letter-spacing: 0.9px;
  color: var(--white);
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

export const ServiceCard = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  align-items: center;
  gap: 15px;
  text-align: center;
  padding: 46px 30px 50px 30px;
  background: var(--white);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);

  svg {
    font-size: 48px;
    line-height: 48px;
    font-weight: 100;
    color: var(--black);
  }
`;

export const ServiceTitle = styled.p`
  font-size: 33px;
  line-height: 33px;
  font-weight: 700;
  color: var(--black);
`;

export const ServiceDescription = styled.p`
  ${({ theme }) => theme.mixins.fontSize16};
  font-weight: 400;
  color: var(--gray2);
`;
