import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LocationCard = styled(motion.div)`
  cursor: pointer;
  position: relative;
  overflow: hidden;

  span {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    img {
      visibility: hidden;
    }

    .locationInfo {
      transform: translateY(-10px);
      transition-delay: 0.15s;
    }

    .bg {
      transform: translateY(-40px);

      &::after {
        opacity: 0.3;
      }
    }
  }

  @media ${({ theme }) => theme.bp.bpTinyS} {
    min-height: 235px;
  }
`;

export const Bg = styled.div`
  width: 100%;
  height: calc(100% + 40px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: translateY(0px);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--black);
    opacity: 0;
    transition: opacity 0.45s linear;
  }
`;

export const LocationInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: -12px;
  max-width: 80%;
  background-color: var(--white);
  padding-top: 25px;
  padding-right: 40px;
  transform: translateY(100%);
  transition: 0.45s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const LocationInfoTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  color: var(--black);
`;

export const LocationInfoSubtitle = styled.p`
  font-size: 12px;
  line-height: 26px;
  font-weight: 300;
  color: var(--black);
`;
