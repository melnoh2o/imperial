import { Button } from './styles';

const ToggleButton = ({ isWhite, isOpen, toggle }) => {
  return (
    <Button onClick={toggle} $isWhite={isWhite} $isOpen={isOpen}>
      <span className="first" />
      <span className="second" />
      <span className="third" />
    </Button>
  );
};

export default ToggleButton;
