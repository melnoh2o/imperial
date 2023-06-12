import { useTranslation } from 'react-i18next';

import { Variants } from '../../../constants/animation';
import { ContentWrapper, TitleStack } from '../../styles/index';
import { Subtitle } from '../../styles/index';
import { Title } from '../../styles/index';
import { Container, ContentStack } from '../../styles/index';
import { useAddressesData } from './helpers';
import { Grid, MeetUsCard, MeetUsLink, MeetUsTitle, MeetUsTitleStack, Separator } from './styles';

const MeetUs = () => {
  const { t } = useTranslation();

  const { addresses } = useAddressesData();

  return (
    <ContentWrapper $isLast>
      <Container>
        <ContentStack>
          <TitleStack initial="hidden" exit="exit" whileInView="enter">
            <Subtitle variants={Variants.opacity} custom={1.1}>
              {t('contacts.meetUs.subtitle')}
            </Subtitle>
            <Title variants={Variants.opacity} custom={1.2}>
              {t('contacts.meetUs.title')}
            </Title>
          </TitleStack>
          <Grid variants={Variants.container} initial="hidden" whileInView="visible">
            {addresses &&
              addresses.map((address) => (
                <MeetUsCard key={address.id} imgUrl={address.img} variants={Variants.item}>
                  <MeetUsTitleStack>
                    <Separator />
                    <MeetUsTitle>{address.location}</MeetUsTitle>
                    <MeetUsLink href={address.href}>{address.title}</MeetUsLink>
                  </MeetUsTitleStack>
                </MeetUsCard>
              ))}
          </Grid>
        </ContentStack>
      </Container>
    </ContentWrapper>
  );
};

export default MeetUs;
