
import ReactGA from 'react-ga4';

const initializeGA = () => {
  ReactGA.initialize('G-NWHCGQPF3B'); 
  ReactGA.send('pageview');
};

export default initializeGA;
