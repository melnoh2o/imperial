import { Suspense, cloneElement, lazy, useEffect } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import useStore from './store';
import { Paths } from './constants/Paths';
import Layout from './components/Layout';
import FullPageLoader from './components/FullPageLoader';
import TourModal from './components/TourModal';
import CallBackFormModal from './components/CallbackFormModal';
import CallBackButton from './components/CallbackButton';
import './styles/global.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Main = lazy(() => import('./pages/Main'));
const Locations = lazy(() => import('./pages/Locations'));
const RealEstates = lazy(() => import('./pages/RealEstates'));
const InvestmentTour = lazy(() => import('./pages/InvestmentTour'));
const Contacts = lazy(() => import('./pages/Contacts'));
const RealEstateDetails = lazy(() => import('./pages/RealEstateDetails'));
const Information = lazy(() => import('./pages/Information'));
const RealEstatesByLocation = lazy(() => import('./pages/RealEstatesByLocation'));

function App() {
  const element = useRoutes([
    {
      path: Paths.MAIN,
      element: <Main />,
    },
    {
      path: Paths.LOCATIONS,
      element: <Locations />,
    },
    {
      path: Paths.REAL_ESTATES,
      element: <RealEstates />,
    },
    {
      path: Paths.INVESTMENT_TOUR,
      element: <InvestmentTour />,
    },
    {
      path: Paths.CONTACTS,
      element: <Contacts />,
    },
    {
      path: Paths.REAL_ESTATE_DETAILS,
      element: <RealEstateDetails />,
    },
    {
      path: Paths.INFORMATION,
      element: <Information />,
    },
    {
      path: Paths.REAL_ESTATES_BY_LOCATION,
      element: <RealEstatesByLocation />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  const isFormClosed = useStore((state) => state.isFormClosed);
  const open = useStore((state) => state.open);

  useEffect(() => {
    const handleOpenModal = () => {
      const timer = setTimeout(() => {
        open();
      }, 180000);
      return () => clearTimeout(timer);
    };

    if (!isFormClosed) {
      handleOpenModal();
    }
  }, []);

  return (
    <Suspense fallback={<FullPageLoader />}>
      <Layout>
        <TourModal />
        <CallBackFormModal />
        <CallBackButton />
        <AnimatePresence mode="wait" initial={false}>
          {cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </Layout>
    </Suspense>
  );
}

export default App;
