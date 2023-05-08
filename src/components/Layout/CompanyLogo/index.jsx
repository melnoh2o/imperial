import { Variants } from '../../../constants/animation';
import { Paths } from '../../../constants/Paths';
import Logo from '../../svgs/Logo';
import { CompanyTitle, Group } from './styles';

const CompanyLogo = ({ isWhite }) => {
  return (
    <Group variants={Variants.opacity} custom={1.1}>
      <Logo color={isWhite ? 'var(--black)' : 'var(--white)'} />
      <CompanyTitle to={Paths.MAIN} $isWhite={isWhite}>
        Imperial
      </CompanyTitle>
    </Group>
  );
};

export default CompanyLogo;
