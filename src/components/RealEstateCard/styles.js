import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  background: var(--gray4);
  ${({ theme }) => theme.mixins.column};
  justify-content: space-between;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 1px 1px 5px var(--black-bg4);

    img {
      opacity: 0.7;
      filter: alpha(opacity=70);
      transform: translate3d(0, 0, 0) scale(1.1);
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    height: 170px;
  }
`;

export const Img = styled.img`
  width: calc(100% + 50px);
  opacity: 1;
  transition: opacity 0.35s, transform 0.35s;
  transform: translate3d(-10px, 0, 0) scale(1.1);
`;

export const InfoWrapper = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
`;

export const InfoTitle = styled.span`
  display: inline-block;
  color: var(--white);
  font-size: 1em;
  padding: 12px 20px;
  background: var(--black);
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 8px;
  padding: clamp(1.56rem, calc(1.44rem + 0.61vw), 1.88rem) clamp(1.25rem, calc(1.13rem + 0.61vw), 1.56rem)
    clamp(1.25rem, calc(1.13rem + 0.61vw), 1.56rem);
`;

export const ContentLink = styled(NavLink)`
  font-size: 1.285em;
  font-weight: 400;
  letter-spacing: 2.2px;
  color: var(--black);
  opacity: 1;
  transition: all 0.35s linear;

  &:is(:hover, :active, :focus) {
    opacity: 0.7;
  }
`;

export const Developer = styled.p`
  font-size: 16px;
  color: var(--black);

  strong {
    color: var(--gray2);
  }
`;

export const FooterWrapper = styled.div`
  ${({ theme }) => theme.mixins.apart};
  border-top: 1px solid var(--black);
  padding: 8px 20px;
`;

export const Location = styled.p`
  font-size: 14px;
  color: var(--black);
  letter-spacing: 1.2px;

  strong {
    color: var(--gray2);
    letter-spacing: 0;
  }
`;

export const Handover = styled.p`
  font-size: 14px;
  color: var(--black);
  ${({ theme }) => theme.mixins.center};
  gap: 4px;

  svg {
    color: var(--gray2);
  }
`;
