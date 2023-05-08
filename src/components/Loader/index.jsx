import { Wrapper } from './styles';

const Loader = ({ size = 48, color = 'var(--black)', isAbsoluteCentered }) => {
  return <Wrapper $size={size} $color={color} $isAbsoluteCentered={isAbsoluteCentered} />;
};

export default Loader;
