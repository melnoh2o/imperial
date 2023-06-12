import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Variants } from '../../../constants/animation';
import { Container, Subtitle, Title, TitleStack } from '../../styles';
import { useTestimonialsData } from './helpers/useTestimonialsData';
import Slider from './Slider';
import Pagination from './Pagination';
import { Group, Wrapper } from './styles';

const Testimonials = () => {
  const { t } = useTranslation();

  const { testimonials } = useTestimonialsData();

  const [testimonial, setTestimonial] = useState(testimonials[0]);
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Container>
      <Wrapper initial="hidden" exit="exit" whileInView="enter" $isLast>
        <TitleStack>
          <Subtitle variants={Variants.opacity} custom={1.2}>
            {t('information.testimonials.subtitle')}
          </Subtitle>
          <Title variants={Variants.opacity} custom={1.3}>
            {t('information.testimonials.title')}
          </Title>
        </TitleStack>
        <Group>
          {testimonials && (
            <Pagination
              testimonial={testimonial}
              setTestimonial={setTestimonial}
              list={testimonials}
              slideIndex={slideIndex}
              setSlideIndex={setSlideIndex}
            />
          )}
          {testimonials && <Slider testimonial={testimonials[slideIndex]} />}
        </Group>
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
