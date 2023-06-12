import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const { contacts } = useNavLinks();

  return (
    <Wrapper initial="hidden" exit="exit" whileInView="enter">
      <FlexContainer>
        <CompanyLogo />
        <Description variants={Variants.opacity} custom={1.2}>
          {t('layout.footer.description')}
        </Description>
      </FlexContainer>
      <Stack>
        <motion.div variants={Variants.opacity} custom={1.1}>
          <GetInTouchLink to={Paths.CONTACTS}>{t('layout.footer.getInTouchLink')}</GetInTouchLink>
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
