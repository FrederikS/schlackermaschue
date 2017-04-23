import ReactGA from 'react-ga';
import { config } from 'config';

ReactGA.initialize(config.gaTrackingCode);

export const onRouteUpdate = (route: RouteLocation) => {
  ReactGA.pageview(route.pathname);
};

export const shouldUpdateScroll = () => false;

export default {
  onRouteUpdate,
  shouldUpdateScroll,
};
