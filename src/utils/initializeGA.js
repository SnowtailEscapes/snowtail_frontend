
import ReactGA from 'react-ga4';

const initializeGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS); 
  ReactGA.send('pageview');
};

export default initializeGA;
