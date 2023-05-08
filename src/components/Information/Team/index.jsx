import { Container, ContentStack, TitleStack, Title, Subtitle } from '../../styles/index';
import { useTeamData } from './helpers/useTeamData';
import { Grid, MemberText, Position, TeamMemberBg, TeamMemberCard, TeamMemberName, Wrapper } from './styles';

const Team = () => {
  const { team } = useTeamData();

  return (
    <Wrapper>
      <Container>
        <ContentStack>
          <TitleStack>
            <Subtitle>КОМАНДА</Subtitle>
            <Title>Специалисты готовы служить.</Title>
          </TitleStack>
          <Grid>
            {team &&
              team.map((member) => (
                <TeamMemberCard key={member.id}>
                  <TeamMemberBg imgUrl={member.img} />
                  <Position className="position">{member.profession}</Position>
                  <MemberText className="memberText">{member.text}</MemberText>
                  <TeamMemberName>{member.fullName}</TeamMemberName>
                </TeamMemberCard>
              ))}
          </Grid>
        </ContentStack>
      </Container>
    </Wrapper>
  );
};

export default Team;
