import { Stack } from '@mantine/core';
import { motion } from 'framer-motion';

import { Paths } from '../../../../constants/Paths';
import { Variants } from '../../../../constants/animation';
import { useNavLinks } from '../../../../helpers/hooks/useNavLinks';
import CompanyLogo from '../../CompanyLogo';
import { Description, FooterLink, GetInTouchLink, Wrapper } from './styles';

const FooterHeader = () => {
  const { contacts } = useNavLinks();

  return (
    <Wrapper initial="hidden" exit="exit" whileInView="enter">
      <Stack spacing={38}>
        <CompanyLogo />
        <Description variants={Variants.opacity} custom={1.2}>
          Мы - команда профессионалов, специализирующихся на предоставлении услуг по покупке, продаже и аренде
          недвижимости в Северном Кипре.
        </Description>
      </Stack>
      <Stack spacing={37} align="flex-end">
        <motion.div variants={Variants.opacity} custom={1.1}>
          <GetInTouchLink to={Paths.CONTACTS}>СВЯЗАТЬСЯ</GetInTouchLink>
        </motion.div>
        <Stack spacing={4} align="flex-end">
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
        </Stack>
      </Stack>
    </Wrapper>
  );
};

export default FooterHeader;
