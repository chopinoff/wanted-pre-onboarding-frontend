import facepaint from 'facepaint';
import breakpoints from 'constants/breakpoints';

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default mq;
