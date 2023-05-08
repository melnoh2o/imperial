import { Map, Marker } from 'pigeon-maps';
import { motion } from 'framer-motion';

import { Variants } from '../../../constants/animation';

const ContactMap = () => {
  return (
    <motion.div initial="hidden" exit="exit" whileInView="enter" variants={Variants.opacity} custom={1.2}>
      <Map height={300} defaultCenter={[35.3384784, 33.3047867]} zoom={16}>
        <Marker width={50} anchor={[35.3384784, 33.3047867]} />
      </Map>
    </motion.div>
  );
};

export default ContactMap;
