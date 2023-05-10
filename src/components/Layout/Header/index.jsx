import { useLocation } from 'react-router-dom';
import { Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useScroll, useTransform } from 'framer-motion';

import { Container } from '../../styles/index';
import CompanyLogo from '../CompanyLogo';
import ListItem from './ListItem';
import BurgerMenu from './BurgerMenu';
import { HeaderWrapper } from './styles';

const Header = () => {
  const location = useLocation();
  const { scrollY } = useScroll();

  const matches = useMediaQuery('(max-width: 1160px)');

  const isWhite =
    location.pathname.startsWith('/real-estate-details') ||
    location.pathname.startsWith('/real-estates-by-location');

  const background = useTransform(
    scrollY,
    [0, 200],
    [`${isWhite ? '#fff' : 'transparent'}`, `${isWhite ? '#fff' : '#111'}`]
  );

  return (
    <HeaderWrapper $isWhite={isWhite} style={{ background }} initial="hidden" whileInView="enter" exit="exit">
      <Container>
        <Group position="apart" spacing={0}>
          <CompanyLogo isWhite={isWhite} />
          {matches ? <BurgerMenu isWhite={isWhite} /> : <ListItem isWhite={isWhite} />}
        </Group>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
