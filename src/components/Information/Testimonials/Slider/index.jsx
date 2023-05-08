import { Variants } from '../../../../constants/animation';
import { Blockquote, Name, QuoteIcon, Stack, Wrapper } from './styles';

const Slider = ({ testimonial }) => {
  return (
    <Wrapper variants={Variants.opacity} custom={1.2}>
      <Stack>
        <QuoteIcon />
        <Blockquote>{testimonial?.testimonial}</Blockquote>
        <Name>-{testimonial?.name}</Name>
      </Stack>
    </Wrapper>
  );
};

export default Slider;
