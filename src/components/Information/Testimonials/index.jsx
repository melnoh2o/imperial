import { useState } from 'react';

import { Variants } from '../../../constants/animation';
import { Container, Subtitle, Title, TitleStack } from '../../styles';
import { useTestimonialsData } from './helpers/useTestimonialsData';
import Slider from './Slider';
import Pagination from './Pagination';
import { Group, Wrapper } from './styles';

const Testimonials = () => {
  const { testimonials } = useTestimonialsData();
  const [testimonial, setTestimonial] = useState(testimonials[0]);
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Container>
      <Wrapper initial="hidden" exit="exit" whileInView="enter" viewport={{ amount: 0.3 }} $isLast>
        <TitleStack>
          <Subtitle variants={Variants.opacity} custom={1.2}>
            ОТЗЫВЫ
          </Subtitle>
          <Title variants={Variants.opacity} custom={1.3}>
            Они любят нас.
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
