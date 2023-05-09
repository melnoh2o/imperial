import { motion } from 'framer-motion';

import { Paths } from '../../../../constants/Paths';
import { Variants } from '../../../../constants/animation';
import { useNavLinks } from '../../../../helpers/hooks/useNavLinks';
import CompanyLogo from '../../CompanyLogo';
import {
  Description,
  FlexContainer,
  FooterLink,
  GetInTouchLink,
  Wrapper,
  Stack,
  ListContainer,
} from './styles';

const FooterHeader = () => {
  const { contacts } = useNavLinks();

  return (
    <Wrapper initial="hidden" exit="exit" whileInView="enter">
      <FlexContainer>
        <CompanyLogo />
        <Description variants={Variants.opacity} custom={1.2}>
          Мы - команда профессионалов, специализирующихся на предоставлении услуг по покупке, продаже и аренде
          недвижимости в Северном Кипре.
        </Description>
      </FlexContainer>
      <Stack>
        <motion.div variants={Variants.opacity} custom={1.1}>
          <GetInTouchLink to={Paths.CONTACTS}>СВЯЗАТЬСЯ</GetInTouchLink>
        </motion.div>
        <ListContainer>
          {contacts.map((contact) => (
            <FooterLink
              key={contact.id}
              href={contact.path}
              target="_blank"
              variants={Variants.opacity}
              custom={1.2}
            >
              {contact.title}
            </FooterLink>
          ))}
        </ListContainer>
      </Stack>
    </Wrapper>
  );
};

export default FooterHeader;
