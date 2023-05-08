import { useLocation, useNavigate } from 'react-router-dom';

import useStore from '../../../../store';
import { useNavLinks } from '../../../../helpers/hooks/useNavLinks';
import { NavbarWrapper, NavBarItem, NavBarLink } from './styles';

const variantContainer = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const ListItem = ({ isWhite }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const close = useStore((store) => store.closeBurgerMenu);

  const { navLinks } = useNavLinks();

  const handleNavigate = (path) => {
    navigate(path);
    close();
  };

  return (
    <NavbarWrapper variants={variantContainer}>
      {navLinks.map((navLink) => (
        <NavBarItem key={navLink.id} variants={variantItem}>
          <NavBarLink
            onClick={() => handleNavigate(navLink.path)}
            $isActive={navLink.path === location.pathname}
            $isWhite={isWhite}
          >
            {navLink.title}
          </NavBarLink>
        </NavBarItem>
      ))}
    </NavbarWrapper>
  );
};

export default ListItem;
