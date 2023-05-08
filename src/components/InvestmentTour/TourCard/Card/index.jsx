import { Variants } from '../../../../constants/animation';
import { Wrapper } from './styles';

const Card = ({ item }) => {
  return <Wrapper variants={Variants.item}>{item.description}</Wrapper>;
};

export default Card;
