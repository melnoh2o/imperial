import { Variants } from '../../../constants/animation';
import { Container, ContentWrapper, Subtitle, Title, TitleStack } from '../../styles/index';
import Card from './Card';
import { useNumberData } from './helpers';
import { FlexContainer, NumberContentWrapper, NumberDescription, NumbersWrapper, Stack } from './styles';

const Numbers = () => {
  const { numbers } = useNumberData();

  return (
    <ContentWrapper>
      <Container>
        <FlexContainer initial="hidden" exit="exit" whileInView="enter">
          <Stack>
            <TitleStack variants={Variants.opacity} custom={1.3} viewport={{ amount: 0.3 }}>
              <Subtitle>Скидки и бонусы</Subtitle>
              <Title>Imperial</Title>
            </TitleStack>
            <NumberDescription variants={Variants.opacity} custom={1.4} viewport={{ amount: 0.2 }}>
              Мы предлагаем конкурентные цены на все объекты недвижимости на Северном Кипре и всегда готовы
              предоставить дополнительные скидки и бонусы для наших клиентов.
            </NumberDescription>
          </Stack>
          <NumbersWrapper variants={Variants.opacity} custom={1.3} viewport={{ amount: 0.2 }}>
            <NumberContentWrapper>
              {numbers.map((number, index) => (
                <Card
                  key={number.id}
                  index={index + 1}
                  x={number.x}
                  y={number.y}
                  title={number.numbers}
                  subtitle={number.title}
                  titlePosition={number.numbersPosition}
                  subtitlePosition={number.titlePosition}
                />
              ))}
            </NumberContentWrapper>
          </NumbersWrapper>
        </FlexContainer>
      </Container>
    </ContentWrapper>
  );
};

export default Numbers;
