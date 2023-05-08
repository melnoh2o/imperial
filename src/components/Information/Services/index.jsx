import { Stack as MantineStack, Box } from '@mantine/core';

import { Container } from '../../styles/index';
import { useServicesData } from './helpers/useServicesData';
import {
  ContentWrapper,
  Grid,
  Overlay,
  ServiceBg,
  ServiceCard,
  ServiceDescription,
  ServiceTitle,
  Stack,
  Subtitle,
  Title,
  Wrapper,
} from './styles';
import ListItem from './ListItem';
import { Variants } from '../../../constants/animation';

const Services = () => {
  const { services } = useServicesData();

  return (
    <Wrapper>
      <Container>
        <ListItem />
      </Container>
      <Box style={{ position: 'relative' }}>
        <ServiceBg />
        <Overlay />
        <ContentWrapper>
          <Container>
            <Stack>
              <MantineStack spacing={18}>
                <Subtitle
                  initial="hidden"
                  exit="exit"
                  whileInView="enter"
                  variants={Variants.opacity}
                  custom={1.2}
                >
                  УСЛУГИ
                </Subtitle>
                <Title
                  initial="hidden"
                  exit="exit"
                  whileInView="enter"
                  variants={Variants.opacity}
                  custom={1.2}
                >
                  Это то, что мы делаем.
                </Title>
              </MantineStack>

              <Grid variants={Variants.container} initial="hidden" whileInView="visible">
                {services.slice(0, 3).map((service) => {
                  const Icon = service.icon;
                  return (
                    <ServiceCard key={service.id} variants={Variants.item}>
                      <Icon />
                      <ServiceTitle>{service.title}</ServiceTitle>
                      <ServiceDescription>{service.description}</ServiceDescription>
                    </ServiceCard>
                  );
                })}
              </Grid>
            </Stack>
          </Container>
        </ContentWrapper>
      </Box>
    </Wrapper>
  );
};

export default Services;
