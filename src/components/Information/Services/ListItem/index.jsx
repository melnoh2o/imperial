import { Variants } from '../../../../constants/animation';
import { useServicesData } from '../helpers/useServicesData';
import { Card, CardDescription, CardTitle, Wrapper } from './styles';

const ListItem = () => {
  const { services } = useServicesData();

  return (
    <Wrapper variants={Variants.container} initial="hidden" animate="visible">
      {services.slice(3).map((service) => (
        <Card key={service.id} variants={Variants.item}>
          <CardTitle>{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </Card>
      ))}
    </Wrapper>
  );
};

export default ListItem;
