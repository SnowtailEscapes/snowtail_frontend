
import ReactGA from 'react-ga4';

const initializeGA = () => {
  ReactGA.initialize(`${import.meta.env.GOOGLE_ANALYTICS`); 
  ReactGA.send('pageview');
};

export default initializeGA;
