import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BiMessageRoundedDetail } from 'react-icons/bi';

import useStore from '../../store';
import { ButtonWrapper } from './styles';

const CallBackButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const location = useLocation();

  const openCallbackModal = useStore((store) => store.openCallbackModal);

  useEffect(() => {
    if (location.pathname.includes('real-estate-details')) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [location.pathname]);

  return (
    <>
      {isVisible ? (
        <ButtonWrapper onClick={openCallbackModal}>
          <BiMessageRoundedDetail />
        </ButtonWrapper>
      ) : null}
    </>
  );
};

export default CallBackButton;
