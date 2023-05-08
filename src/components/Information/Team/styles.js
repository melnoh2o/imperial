import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 70px 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

export const TeamMemberCard = styled.div`
  position: relative;
  ${({ theme }) => theme.mixins.column};
  gap: 30px;
  cursor: pointer;
  padding-top: 50px;
  overflow: hidden;

  &:hover {
    .position {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;

      &::after {
        height: 85px;
      }
    }

    .memberText {
      transform: translateY(-10px);
      transition-delay: 0.15s;
    }
  }
`;

export const TeamMemberBg = styled.div`
  height: 380px;
  background: ${(props) => `url(${props.imgUrl})`} center/cover no-repeat;
`;

export const TeamMemberName = styled.p`
  font-size: 26px;
  line-height: 30px;
  font-weight: 700;
  color: var(--black);
  text-align: right;
`;

export const Position = styled.p`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  top: 0;
  right: 0;
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
  color: var(--black);
  transform: translateY(-100%);
  transition: transform 0.3s ease-in, opacity 0.3s ease-in, visibility 0.3s ease-in;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 1px;
    height: 0;
    background-color: var(--black);
    transition: height 0.5s ease;
  }
`;

export const MemberText = styled.div`
  position: absolute;
  left: 0;
  bottom: -10px;
  max-width: 80%;
  font-size: 14px;
  line-height: 26px;
  font-weight: 300;
  color: var(--black);
  background-color: var(--white);
  padding-top: 25px;
  padding-right: 40px;
  transform: translateY(100%);
  transition: 0.45s cubic-bezier(0.4, 0, 0.2, 1);
`;
