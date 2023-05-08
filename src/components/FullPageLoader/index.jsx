import MotionPrivacyScreen from '../MotionPrivacyScreen';
import { LoaderTitle, Wrapper } from './styles';

const FullPageLoader = () => {
  return (
    <>
      <Wrapper>
        <LoaderTitle>Imperial</LoaderTitle>
      </Wrapper>
      <MotionPrivacyScreen />
    </>
  );
};

export default FullPageLoader;
