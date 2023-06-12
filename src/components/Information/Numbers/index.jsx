import { useTranslation } from 'react-i18next';

import { Variants } from '../../../constants/animation';
import { Container, ContentWrapper, Subtitle, Title, TitleStack } from '../../styles/index';
import Card from './Card';
import { useNumberData } from './helpers';
import { FlexContainer, NumberContentWrapper, NumberDescription, NumbersWrapper, Stack } from './styles';

const Numbers = () => {
  const { t } = useTranslation();

  const { numbers } = useNumberData();

  return (
    <ContentWrapper>
      <Container>
        <FlexContainer initial="hidden" exit="exit" whileInView="enter">
          <Stack>
            <TitleStack variants={Variants.opacity} custom={1.3}>
              <Subtitle>{t('information.numbers.subtitle')}</Subtitle>
              <Title>{t('information.numbers.title')}</Title>
            </TitleStack>
            <NumberDescription variants={Variants.opacity} custom={1.4}>
              {t('information.numbers.description')}
            </NumberDescription>
          </Stack>
          <NumbersWrapper variants={Variants.opacity} custom={1.3}>
            <NumberContentWrapper>
              {numbers.map((number) => (
                <Card key={number.id} title={number.numbers} subtitle={number.title} />
              ))}
            </NumberContentWrapper>
          </NumbersWrapper>
        </FlexContainer>
      </Container>
    </ContentWrapper>
  );
};

export default Numbers;
