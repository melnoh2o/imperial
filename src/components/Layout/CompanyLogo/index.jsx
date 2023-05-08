import { motion } from 'framer-motion';
import { Variants } from '../../../constants/animation';
import { CompanyTitle } from './styles';

const CompanyLogo = ({ isWhite }) => {
  return (
    <motion.p variants={Variants.opacity} custom={1.1}>
      <CompanyTitle $isWhite={isWhite}>Imperial</CompanyTitle>
    </motion.p>
  );
};

export default CompanyLogo;
