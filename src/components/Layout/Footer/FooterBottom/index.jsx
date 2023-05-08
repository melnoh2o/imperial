import React from 'react';
import { Group } from '@mantine/core';

import { useNavLinks } from '../../../../helpers/hooks/useNavLinks';
import { Variants } from '../../../../constants/animation';
import { CopyrightTitle, SocialLinksGroup, SocialLink, Wrapper } from './styles';

const FooterBottom = () => {
  const { socialLinks } = useNavLinks();

  return (
    <Wrapper initial="hidden" exit="exit" whileInView="enter">
      <Group position="apart">
        <CopyrightTitle variants={Variants.opacity} custom={1.3}>
          © {new Date().getFullYear()} Все права защищены
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
      </Group>
    </Wrapper>
  );
};

export default FooterBottom;
