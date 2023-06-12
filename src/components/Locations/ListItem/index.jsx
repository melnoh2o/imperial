import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';

import useStore from '../../../store';
import { Variants } from '../../../constants/animation';
import { LocationServices } from '../../../services/locationServices';
import Loader from '../../Loader';
import { Container, ContentStack, ContentWrapper, Subtitle, Title, TitleStack } from '../../styles';
import Item from './Item';
import { FlexContainer } from './styles';

const LisItem = () => {
  const { t } = useTranslation();

  const { lang } = useStore((store) => store);

  const { data: locations, isLoading } = useQuery(['locations', lang], () => LocationServices.getAll(lang));

  return (
    <ContentWrapper $isBoth>
      <Container>
        <ContentStack>
          <TitleStack initial="hidden" exit="exit" whileInView="enter">
            <Subtitle variants={Variants.opacity} custom={1.2}>
              {t('location.subtitle')}
            </Subtitle>
            <Title variants={Variants.opacity} custom={1.3}>
              {t('location.list.title')}
            </Title>
          </TitleStack>
          <FlexContainer variants={Variants.container} initial="hidden" animate="visible">
            {!isLoading && !!locations ? (
              locations?.map((item) => <Item key={item.id} item={item} />)
            ) : (
              <Loader isAbsoluteCentered size={35} />
            )}
          </FlexContainer>
        </ContentStack>
      </Container>
    </ContentWrapper>
  );
};

export default LisItem;
