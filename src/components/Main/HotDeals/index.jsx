import { useTranslation } from 'react-i18next';

import { Variants } from '../../../constants/animation';
import { ContentWrapper, Container, TitleStack, Subtitle, Title } from '../../styles/index';
import ListItem from './ListItem';
import { FlexContainer } from './styles';

const HotDeals = () => {
  const { t } = useTranslation();

  return (
    <ContentWrapper>
      <Container>
        <FlexContainer initial="hidden" exit="exit" whileInView="enter">
          <TitleStack variants={Variants.opacity} custom={1.2} viewport={{ amount: 0.2 }}>
            <Subtitle>{t('main.hotDeals.subtitle')}</Subtitle>
            <Title>{t('main.hotDeals.title')}</Title>
          </TitleStack>

          <ListItem />
        </FlexContainer>
      </Container>
    </ContentWrapper>
  );
};

export default HotDeals;
