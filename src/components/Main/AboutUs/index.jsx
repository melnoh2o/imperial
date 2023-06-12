import { useTranslation } from 'react-i18next';

import { Variants } from '../../../constants/animation';
import { Container, ContentWrapper } from '../../styles/index';
import { AboutUsTitle, FlexContainer, WelcomeTitleBox } from './styles';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <ContentWrapper $isFirst>
      <Container>
        <FlexContainer initial="hidden" exit="exit" whileInView="enter" viewport={{ amount: 0.2 }}>
          <AboutUsTitle variants={Variants.opacity} custom={1.2}>
            {t('main.aboutUs.title')}
          </AboutUsTitle>
          <WelcomeTitleBox variants={Variants.opacity} custom={1.3}>
            {t('main.aboutUs.description')}
          </WelcomeTitleBox>
        </FlexContainer>
      </Container>
    </ContentWrapper>
  );
};

export default AboutUs;
