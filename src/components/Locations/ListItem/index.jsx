import { useQuery } from '@tanstack/react-query';

import { Variants } from '../../../constants/animation';
import { LocationServices } from '../../../services/locationServices';
import Loader from '../../Loader';
import { Container, ContentStack, ContentWrapper, Subtitle, Title, TitleStack } from '../../styles';
import Item from './Item';
import { FlexContainer } from './styles';

const LisItem = () => {
  const { data: locations, isLoading } = useQuery(['locations'], () => LocationServices.getAll());

  return (
    <ContentWrapper $isBoth>
      <Container>
        <ContentStack>
          <TitleStack initial="hidden" exit="exit" whileInView="enter">
            <Subtitle variants={Variants.opacity} custom={1.2}>
              Локации
            </Subtitle>
            <Title variants={Variants.opacity} custom={1.3}>
              Северный Кипр
            </Title>
          </TitleStack>
          <FlexContainer variants={Variants.container} initial="hidden" animate="visible">
            {!isLoading && !!locations ? (
              locations.map((item) => <Item key={item.id} item={item} />)
            ) : (
              <Loader isAbsoluteCentered size={35} />
            )}
          </FlexContainer>
        </ContentStack>
      </Container>
    </ContentWrapper>
  );
};

export default LisItem;
