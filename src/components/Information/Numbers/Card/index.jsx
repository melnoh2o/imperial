import { Text } from './styles';

const Card = ({ title, subtitle, titlePosition, subtitlePosition, index, x, y }) => {
  return (
    <Text>
      <span className="number">{title}</span>
      <span className="title">{subtitle}</span>
    </Text>
  );
};

export default Card;
