import { Variants } from '../../../constants/animation';
import { ContentWrapper, Container, ContentStack, TitleStack, Subtitle, Title } from '../../styles/index';
import ListItem from './ListItem';

const HotDeals = () => {
  return (
    <ContentWrapper>
      <Container>
        <ContentStack initial="hidden" exit="exit" whileInView="enter" viewport={{ amount: 0.3 }}>
          <TitleStack variants={Variants.opacity} custom={1.2}>
            <Subtitle>Последние старты продаж</Subtitle>
            <Title>Возможность приобрести недвижимость по лучшим условиям</Title>
          </TitleStack>

          <ListItem />
        </ContentStack>
      </Container>
    </ContentWrapper>
  );
};

export default HotDeals;
