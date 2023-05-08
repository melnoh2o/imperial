import { useIsPresent } from 'framer-motion';

import { Wrapper } from './styles';

const MotionPrivacyScreen = () => {
  const isPresent = useIsPresent();
  return (
    <Wrapper
      initial={{ transform: 'translateY(100%)' }}
      animate={{ transform: 'translateY(100%)', transition: { duration: 0.8, ease: 'circOut' } }}
      exit={{ transform: 'translateY(-100%)', transition: { duration: 0.8, ease: 'circIn' } }}
      style={{ originX: isPresent ? 0 : 1 }}
    />
  );
};

export default MotionPrivacyScreen;
