import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ContentWrapper } from '../../styles';

const bgImg = 'https://res.cloudinary.com/diwpzmuai/image/upload/v1683825343/IMG_2085_c7gdjd.jpg';

export const Wrapper = styled(ContentWrapper)`
  position: relative;
  ${({ theme }) => theme.mixins.column};
  gap: clamp(3.13rem, calc(2.64rem + 2.44vw), 4.38rem);
`;

export const ServiceBg = styled.div`
  height: 468px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${bgImg}) center/cover no-repeat;
`;

export const Overlay = styled.span`
  height: 468px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--black-bg5);
`;

export const BodyWrapper = styled.div`
  position: relative;
  padding-top: clamp(3.13rem, calc(2.64rem + 2.44vw), 4.38rem);

  @media ${({ theme }) => theme.bp.bpTinyL} {
    width: 85%;
    margin-inline: auto;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    width: 100%;
  }
`;

export const Stack = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: clamp(1.88rem, calc(1.39rem + 2.44vw), 3.13rem);
`;

export const Subtitle = styled(motion.p)`
  ${({ theme }) => theme.mixins.fontSize14}
  letter-spacing: 4.5px;
  font-weight: 300;
  color: var(--white);
`;

export const Title = styled(motion.h4)`
  font-size: clamp(2.19rem, calc(2.07rem + 0.61vw), 2.5rem);
  line-height: clamp(2rem, calc(1.71rem + 1.46vw), 2.75rem);
  letter-spacing: 0.9px;
  color: var(--white);
`;

export const Grid = styled(motion.div)`
  display: grid;
  gap: clamp(1.5rem, calc(1.35rem + 0.73vw), 1.88rem);

  @media ${({ theme }) => theme.bp.bpTinyS} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.bp.bpExtraSmall} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${({ theme }) => theme.bp.bpMedium} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ServiceCard = styled(motion.div)`
  ${({ theme }) => theme.mixins.column};
  align-items: center;
  gap: clamp(0.63rem, calc(0.5rem + 0.61vw), 0.94rem);
  text-align: center;
  padding: clamp(2.38rem, calc(2.18rem + 0.98vw), 2.88rem) clamp(1.56rem, calc(1.44rem + 0.61vw), 1.88rem)
    clamp(2.5rem, calc(2.26rem + 1.22vw), 3.13rem);
  background: var(--white);
  box-shadow: 0 30px 50px var(--black-bg4);

  svg {
    font-weight: 100;
    color: var(--black);

    @media ${({ theme }) => theme.bp.bpTinyS} {
      font-size: 35px;
      line-height: 35px;
    }

    @media ${({ theme }) => theme.bp.bpMedium} {
      font-size: 48px;
      line-height: 48px;
    }
  }
`;

export const ServiceTitle = styled.p`
  font-size: clamp(1.75rem, calc(1.63rem + 0.61vw), 2.06rem);
  line-height: clamp(1.75rem, calc(1.63rem + 0.61vw), 2.06rem);
  font-weight: 700;
  color: var(--black);
`;

export const ServiceDescription = styled.p`
  ${({ theme }) => theme.mixins.fontSize16};
  font-weight: 400;
  color: var(--gray2);
`;
