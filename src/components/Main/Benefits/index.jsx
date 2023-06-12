import { useTranslation } from 'react-i18next';

import { Variants } from '../../../constants/animation';
import { ContentWrapper, Container } from '../../styles/index';
import { useBenefitData } from './helpers/useBenefitData';
import {
  Bg,
  BgWrapper,
  InnerDescription,
  InnerTitle,
  InnerTitleStack,
  Item,
  InnerWrapper,
  ListItem,
  Overlay,
} from './styles';

const Benefits = () => {
  const { t } = useTranslation();

  const { benefits } = useBenefitData();

  return (
    <ContentWrapper>
      <BgWrapper>
        <Bg />
        <Overlay />
        <Container>
          <InnerWrapper>
            <InnerTitleStack initial="hidden" exit="exit" whileInView="enter" viewport={{ amount: 0.2 }}>
              <InnerTitle variants={Variants.opacity} custom={1.2}>
                {t('main.benefits.title')}
              </InnerTitle>
              <InnerDescription variants={Variants.opacity} custom={1.3}>
                {t('main.benefits.description')}
              </InnerDescription>
            </InnerTitleStack>

            <ListItem
              variants={Variants.container}
              initial="hidden"
              animate="visible"
              viewport={{ amount: 0.2 }}
            >
              {benefits &&
                benefits.map((item) => (
                  <Item key={item.id} variants={Variants.item}>
                    <p>{item.text}</p>
                  </Item>
                ))}
            </ListItem>
          </InnerWrapper>
        </Container>
      </BgWrapper>
    </ContentWrapper>
  );
};

export default Benefits;
