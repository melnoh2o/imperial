import { motion } from 'framer-motion';

import { Variants } from '../../../constants/animation';
import { Container, ContentStack, ContentWrapper, Subtitle, Title, TitleStack } from '../../styles/index';
import { useFAQData } from './helpers/useFAQData';
import CollapseCard from './CollapseCard';

const FAQ = () => {
  const { data } = useFAQData();

  return (
    <ContentWrapper $isLast>
      <Container>
        <ContentStack>
          <TitleStack initial="hidden" exit="exit" whileInView="enter">
            <Subtitle variants={Variants.opacity} custom={1.1}>
              вопросы
            </Subtitle>
            <Title variants={Variants.opacity} custom={1.2}>
              Часто задаваемые вопросы?
            </Title>
          </TitleStack>

          <motion.div variants={Variants.container} initial="hidden" whileInView="visible">
            {data.map((item) => (
              <CollapseCard key={item.id} item={item} />
            ))}
          </motion.div>
        </ContentStack>
      </Container>
    </ContentWrapper>
  );
};

export default FAQ;
