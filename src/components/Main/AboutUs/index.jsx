import { Variants } from '../../../constants/animation';
import { Container, ContentWrapper } from '../../styles/index';
import { AboutUsTitle, FlexContainer, WelcomeTitleBox } from './styles';

const AboutUs = () => {
  return (
    <ContentWrapper $isFirst>
      <Container>
        <FlexContainer initial="hidden" exit="exit" whileInView="enter" viewport={{ amount: 02 }}>
          <AboutUsTitle variants={Variants.opacity} custom={1.2}>
            Imperial Corporation
          </AboutUsTitle>
          <WelcomeTitleBox variants={Variants.opacity} custom={1.3}>
            Добро пожаловать в Imperial Corporation – агентство недвижимости, которое специализируется на
            продаже и аренде недвижимости на Северном Кипре. Мы являемся экспертами в этой области и
            предлагаем широкий выбор недвижимости на всех районах Северного Кипра – от жилых квартир и домов
            до коммерческой недвижимости.
          </WelcomeTitleBox>
        </FlexContainer>
      </Container>
    </ContentWrapper>
  );
};

export default AboutUs;
