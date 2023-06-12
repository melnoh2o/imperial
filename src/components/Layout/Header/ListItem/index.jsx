import { useLocation, useNavigate } from 'react-router-dom';
import { changeLanguage } from 'i18next';

import useStore from '../../../../store';
import { LANG } from '../../../../constants/lang';
import { Variants } from '../../../../constants/animation';
import { useNavLinks } from '../../../../helpers/hooks/useNavLinks';
import { NavbarWrapper, NavBarItem, NavBarLink, ChangeLangBtn } from './styles';

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

  const { closeBurgerMenu, changeLang, lang } = useStore((store) => store);

  const { navLinks } = useNavLinks();

  const handleNavigate = (path) => {
    navigate(path);
    closeBurgerMenu();
  };

  const toggleLang = () => {
    changeLang(lang === LANG.RU ? LANG.EN : LANG.RU);
    changeLanguage(lang === LANG.RU ? LANG.EN : LANG.RU);
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
      <ChangeLangBtn
        onClick={toggleLang}
        aria-label="language change button"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={Variants.opacity}
        viewport={{ once: true }}
      >
        {lang}
      </ChangeLangBtn>
    </NavbarWrapper>
  );
};

export default ListItem;
