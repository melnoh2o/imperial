import { Variants } from '../../../constants/animation';
import { Container, ContentWrapper, Subtitle, Title } from '../../styles/index';
import { useTourCardData } from './helpers/useTourCardData';
import Card from './Card';
import { FlexContainer, Stack, Grid } from './styles';

const TourCard = () => {
  const { data } = useTourCardData();

  return (
    <ContentWrapper $isFirst>
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
    </ContentWrapper>
  );
};

export default TourCard;
