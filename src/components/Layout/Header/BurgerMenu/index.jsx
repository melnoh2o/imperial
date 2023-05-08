import { motion, useCycle } from 'framer-motion';

import useStore from '../../../../store';
import ListItem from '../ListItem';
import ToggleButton from './ToggleButton';
import { BackgroundWrapper } from './styles';

const variantSidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0.2px at 246px 41px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const BurgerMenu = ({ isWhite }) => {
  const isOpen = useStore((store) => store.isBurgerMenuOpen);
  const toggle = useStore((store) => store.toggleBurgerMenu);

  return (
    <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
      <BackgroundWrapper variants={variantSidebar}>
        <ListItem />
      </BackgroundWrapper>
      <ToggleButton isWhite={isWhite} isOpen={isOpen} toggle={toggle} />
    </motion.nav>
  );
};

export default BurgerMenu;
