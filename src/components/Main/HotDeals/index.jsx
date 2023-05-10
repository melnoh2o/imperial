import { Variants } from '../../../constants/animation';
import { ContentWrapper, Container, TitleStack, Subtitle, Title } from '../../styles/index';
import ListItem from './ListItem';
import { FlexContainer } from './styles';

const HotDeals = () => {
  return (
    <ContentWrapper>
      <Container>
        <FlexContainer initial="hidden" exit="exit" whileInView="enter" viewport={{ amount: 0.2 }}>
          <TitleStack variants={Variants.opacity} custom={1.2}>
            <Subtitle>Последние старты продаж</Subtitle>
            <Title>Возможность приобрести недвижимость по лучшим условиям</Title>
          </TitleStack>

          <ListItem />
        </FlexContainer>
      </Container>
    </ContentWrapper>
  );
};

export default HotDeals;
