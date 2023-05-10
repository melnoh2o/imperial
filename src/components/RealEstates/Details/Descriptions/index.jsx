import { Group } from '@mantine/core';
import { GoLocation } from 'react-icons/go';

import { Variants } from '../../../../constants/animation';
import { Item, ListContainer, Location, Title, TitleStack, Wrapper } from './styles';

const Descriptions = ({ realEstate }) => {
  return (
    <Wrapper>
      <TitleStack variants={Variants.opacity} custom={1.3}>
        <Group position="apart">
          <Title>{realEstate.name}</Title>
          <Location>
            <span>{realEstate.location}</span>
            <GoLocation />
          </Location>
        </Group>

        <ListContainer
          variants={Variants.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {realEstate.descriptions.map((item) => (
            <Item key={item.id} variants={Variants.item}>
              <p>{item.description}</p>
            </Item>
          ))}
        </ListContainer>
      </TitleStack>
    </Wrapper>
  );
};

export default Descriptions;
