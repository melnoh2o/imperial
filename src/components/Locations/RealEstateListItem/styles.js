import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 70px 0;
  background-color: var(--white6);
`;

export const LoaderWrapper = styled.div`
  position: relative;
  min-height: ${(props) => (props.$isDataExist ? '50vh' : '30vh')};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;
