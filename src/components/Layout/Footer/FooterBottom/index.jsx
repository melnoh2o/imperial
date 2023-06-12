import { useTranslation } from 'react-i18next';

import { useNavLinks } from '../../../../helpers/hooks/useNavLinks';
import { Variants } from '../../../../constants/animation';
import { CopyrightTitle, SocialLinksGroup, SocialLink, Wrapper, ApartContainer } from './styles';

const FooterBottom = () => {
  const { t } = useTranslation();

  const { socialLinks } = useNavLinks();

  return (
    <Wrapper initial="hidden" exit="exit" whileInView="enter">
      <ApartContainer>
        <CopyrightTitle variants={Variants.opacity} custom={1.3}>
          © {new Date().getFullYear()} {t('layout.footer.allRightsReserved')}
        </CopyrightTitle>
        <SocialLinksGroup>
          {socialLinks.map((socialLink) => {
            const Icon = socialLink.icon;
            return (
              <li key={socialLink.id}>
                <SocialLink href={socialLink.path} target="_blank" variants={Variants.opacity} custom={1.3}>
                  <Icon />
                </SocialLink>
              </li>
            );
          })}
        </SocialLinksGroup>
      </ApartContainer>
    </Wrapper>
  );
};

export default FooterBottom;
