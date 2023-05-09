import { Button } from './styles';

const ToggleButton = ({ isWhite, isOpen, toggle }) => {
  return (
    <Button onClick={toggle} $isWhite={isWhite} $isOpen={isOpen}>
      <span />
    </Button>
  );
};

export default ToggleButton;
