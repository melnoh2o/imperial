import { useLocation } from 'react-router-dom';
import { Group } from '@mantine/core';
import { useScroll, useTransform } from 'framer-motion';

import { useNavLinks } from '../../../helpers/hooks/useNavLinks';
import { Variants } from '../../../constants/animation';
import { Paths } from '../../../constants/Paths';
import { Container } from '../../styles/index';
import CompanyLogo from '../CompanyLogo';
import { HeaderWrapper, NavBarItem, NavBarLink, NavbarWrapper } from './styles';

const Header = () => {
  const location = useLocation();
  const { scrollY } = useScroll();

  const isWhite =
    location.pathname.startsWith('/real-estate-details') ||
    location.pathname.startsWith('/real-estates-by-location');

  const background = useTransform(
    scrollY,
    [0, 200],
    [`${isWhite ? '#fff' : 'transparent'}`, `${isWhite ? '#fff' : '#111'}`]
  );

  const { navLinks } = useNavLinks();

  return (
    <HeaderWrapper $isWhite={isWhite} style={{ background }} initial="hidden" whileInView="enter" exit="exit">
      <Container>
        <Group position="apart" spacing={0}>
          <CompanyLogo isWhite={isWhite} />
          <NavbarWrapper>
            {navLinks.map((navLink, index) => (
              <NavBarItem key={navLink.id} variants={Variants.opacity} custom={`1.${index + 1}`}>
                <NavBarLink
                  to={navLink.path}
                  $isActive={navLink.path === location.pathname}
                  $isWhite={isWhite}
                >
                  {navLink.title}
                </NavBarLink>
              </NavBarItem>
            ))}
          </NavbarWrapper>
        </Group>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
