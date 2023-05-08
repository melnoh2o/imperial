import { Button, Wrapper } from './styles';
import { Variants } from '../../../../constants/animation';

const PaginationButtons = ({ pages, currentPage, setCurrentPage, isLoading }) => {
  return (
    <Wrapper variants={Variants.container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {!!pages &&
        pages.map((page, pageIndex) => (
          <Button
            key={pageIndex}
            onClick={() => setCurrentPage(page)}
            $isActive={currentPage === page}
            disabled={currentPage === page || isLoading}
            variants={Variants.item}
          >
            {page}
          </Button>
        ))}
    </Wrapper>
  );
};

export default PaginationButtons;
