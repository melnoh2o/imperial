import { Text } from './styles';

const Card = ({ title, subtitle }) => {
  return (
    <Text>
      <span className="number">{title}</span>
      <span className="title">{subtitle}</span>
    </Text>
  );
};

export default Card;
