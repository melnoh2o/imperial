import { Variants } from '../../../constants/animation';
import { Container, Subtitle, Title } from '../../styles/index';
import { useTourCardData } from './helpers/useTourCardData';
import Card from './Card';
import { FlexContainer, Wrapper, Stack, Grid } from './styles';

const TourCard = () => {
  const { data } = useTourCardData();

  return (
    <Wrapper>
      <Container>
        <FlexContainer initial="hidden" exit="exit" whileInView="enter">
          <Stack>
            <Subtitle variants={Variants.opacity} custom={1.1}>
              ТУР
            </Subtitle>
            <Title variants={Variants.opacity} custom={1.2}>
              Приглашаем вас на бесплатный 3-х дневный тур
            </Title>
          </Stack>

          <Grid variants={Variants.container} initial="hidden" whileInView="visible">
            {data && data.map((item) => <Card key={item.id} item={item} />)}
          </Grid>
        </FlexContainer>
      </Container>
    </Wrapper>
  );
};

export default TourCard;
