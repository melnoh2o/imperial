import { Variants } from '../../../constants/animation';
import { TitleStack } from '../../styles/index';
import { Subtitle } from '../../styles/index';
import { Title } from '../../styles/index';
import { Container, ContentStack } from '../../styles/index';
import { useAddressesData } from './helpers';
import { Grid, MeetUsCard, MeetUsLink, MeetUsTitle, MeetUsTitleStack, Separator, Wrapper } from './styles';

const MeetUs = () => {
  const { addresses } = useAddressesData();

  return (
    <Wrapper>
      <Container>
        <ContentStack>
          <TitleStack initial="hidden" exit="exit" whileInView="enter">
            <Subtitle variants={Variants.opacity} custom={1.1}>
              МЕСТА
            </Subtitle>
            <Title variants={Variants.opacity} custom={1.2}>
              Встретьтесь с нами в вашем городе.
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
    </Wrapper>
  );
};

export default MeetUs;
