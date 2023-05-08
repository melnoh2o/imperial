import { Variants } from '../../../../constants/animation';
import { Button, Item, ListContainer, Wrapper } from './styles';

const Pagination = ({ list, testimonial, setTestimonial, setSlideIndex }) => {
  const handleClick = (item, index) => {
    setSlideIndex(index);
    setTestimonial(item);
  };

  return (
    <Wrapper>
      <ListContainer variants={Variants.container} initial="hidden" whileInView="visible">
        {list.map((item, index) => (
          <Item key={item.id} variants={Variants.item}>
            <Button
              $isActive={testimonial.id === item.id}
              onClick={() => handleClick(item, index)}
              type="button"
            >
              {item.name}
            </Button>
          </Item>
        ))}
      </ListContainer>
    </Wrapper>
  );
};

export default Pagination;
