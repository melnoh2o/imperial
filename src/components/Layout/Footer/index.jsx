import { Container } from '../../styles/index';
import FooterHeader from './FooterHeader';
import FooterBottom from './FooterBottom';
import { Wrapper } from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterHeader />
        <FooterBottom />
      </Container>
    </Wrapper>
  );
};

export default Footer;
