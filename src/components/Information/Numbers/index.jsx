import { Variants } from '../../../constants/animation';
import { Container, ContentWrapper, Subtitle, Title, TitleStack } from '../../styles/index';
import { useNumberData } from './helpers';
import { FlexContainer, NumberContentWrapper, NumberDescription, NumbersWrapper, Stack } from './styles';

const Svg = ({ title, subtitle, titlePosition, subtitlePosition }) => {
  return (
    <svg>
      <defs>
        <mask id="mask" x="0" y="0" width="100" height="50">
          <rect className="coming-alpha" x="0" y="0" width="100%" height="100%" />
          <text
            className="number"
            textAnchor="middle"
            alignmentBaseline="middle"
            x={`${titlePosition.x}%`}
            y={`${titlePosition.y}%`}
            dy="1"
          >
            {title}
          </text>
          <text
            className="title"
            textAnchor="middle"
            x={`${subtitlePosition.x}%`}
            y={`${subtitlePosition.y}%`}
            dy="1"
          >
            {subtitle}
          </text>
        </mask>
      </defs>
      <rect className="base" x="0" y="0" width="100%" height="100%" mask="url(#mask)"></rect>
    </svg>
  );
};

const Numbers = () => {
  const { numbers } = useNumberData();

  return (
    <ContentWrapper>
      <Container>
        <FlexContainer initial="hidden" exit="exit" whileInView="enter">
          <Stack>
            <TitleStack variants={Variants.opacity} custom={1.3}>
              <Subtitle>Число</Subtitle>
              <Title>Делать с любовью все, что мы делаем.</Title>
            </TitleStack>
            <NumberDescription variants={Variants.opacity} custom={1.4}>
              Наша команда берет на себя все, от разработки идеи и концепции до реализации. Мы верим в
              традиции и учитываем их в наших инновациях. Все наши проекты сочетают в себе уникальный
              художественный образ и функциональные решения.
            </NumberDescription>
          </Stack>
          <NumbersWrapper variants={Variants.opacity} custom={1.3}>
            <NumberContentWrapper>
              {numbers.map((number) => (
                <Svg
                  key={number.id}
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
