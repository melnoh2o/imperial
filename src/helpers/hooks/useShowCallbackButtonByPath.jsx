import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CallBackButton from '../../components/CallbackButton';

export function useShowCallbackButtonByPath() {
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes('real-estate-details')) {
      console.log('shown');
      setIsVisible(true);
    }
  }, [location.pathname]);

  return <>{isVisible ? <CallBackButton /> : null}</>;
}
