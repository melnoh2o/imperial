import { Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AiOutlinePlus } from 'react-icons/ai';

import { Variants } from '../../../../constants/animation';
import { CollapseButton, CollapseText, Wrapper } from './styles';

const CollapseCard = ({ item }) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Wrapper variants={Variants.item}>
      <CollapseButton onClick={toggle} $isOpen={opened}>
        <span>{item.question}</span>
        <AiOutlinePlus strokeWidth={1} />
      </CollapseButton>

      <Collapse in={opened}>
        <CollapseText dangerouslySetInnerHTML={{ __html: item.answer }} />
      </Collapse>
    </Wrapper>
  );
};

export default CollapseCard;
