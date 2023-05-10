import { Stack } from '@mantine/core';

import { Variants } from '../../../constants/animation';
import { Container, ContentWrapper } from '../../styles/index';
import { useConceptData } from './helpers/useConceptData';
import {
  ConceptDescription,
  ConceptImg,
  ConceptImgWrapper,
  ConceptNumber,
  ConceptStack,
  ConceptTitle,
  ConceptTitleStack,
  FlexContainer,
} from './styles';

const Concept = () => {
  const { concepts } = useConceptData();

  return (
    <ContentWrapper>
      <Container>
        <FlexContainer initial="hidden" exit="exit" whileInView="enter" viewport={{ amount: 0.3 }}>
          {concepts &&
            concepts.map((concept, index) => (
              <ConceptStack key={concept.id}>
                <ConceptImgWrapper $isOrderChange={index % 2} variants={Variants.opacity} custom={1.3}>
                  <ConceptImg src={concept.img} />
                </ConceptImgWrapper>
                <ConceptTitleStack variants={Variants.opacity} custom={1.3} viewport={{ amount: 0.2 }}>
                  <ConceptNumber>{index + 1}</ConceptNumber>
                  <ConceptTitle>{concept.title}</ConceptTitle>
                  <Stack spacing={10}>
                    {concept.descriptions.map((item) => (
                      <ConceptDescription key={item.id}>{item.text}</ConceptDescription>
                    ))}
                  </Stack>
                </ConceptTitleStack>
              </ConceptStack>
            ))}
        </FlexContainer>
      </Container>
    </ContentWrapper>
  );
};

export default Concept;
