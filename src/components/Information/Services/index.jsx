import { Box } from '@mantine/core';

import { Container, TitleStack } from '../../styles/index';
import { Variants } from '../../../constants/animation';
import { useServicesData } from './helpers/useServicesData';
import ListItem from './ListItem';
import {
  BodyWrapper,
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

const Services = () => {
  const { services } = useServicesData();

  return (
    <Wrapper $isFirst>
      <Container>
        <ListItem />
      </Container>
      <Box style={{ position: 'relative' }}>
        <ServiceBg />
        <Overlay />
        <BodyWrapper>
          <Container>
            <Stack>
              <TitleStack>
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
              </TitleStack>

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
        </BodyWrapper>
      </Box>
    </Wrapper>
  );
};

export default Services;
