import {HdRouter} from '../../holiday/core/hd-router.js';
import {HdState} from '../../holiday/core/hd-state.js';

// Define routing path in global application state:
HdState.applyScheme({
  routing: {
    type: Object,
    value: null,
  },
});

// Define application routes:
HdRouter.setRoutingMap({
  'homepage': {
    title: 'Home',
    icon: 'home',
    // Will be used as default route:
    default: true,
  },
  'contacts': {
    title: 'Contacts',
    icon: 'contacts',
  },
  'error': {
    icon: 'error',
    title: 'Error...',
    // This route will be used in case of error:
    error: true,
  },
});

// Subscribe on routing event:
window.addEventListener('hd-on-route', (e) => {
  HdState.publish('routing', e.detail);
});

// Initialize current route:
HdRouter.notify();

// Then you can subscribe on routing in any component:
HdState.subscribe('routing', (routing) => {
  console.log(routing);
});

// Apply route:
HdRouter.applyRoute('contacts', {
  /*
  Optional parameter.
  This options will be reflected on adress bar and passed to "routing" object in state.
  */
  opt1: 'value1',
  opt2: 'value2',
  opt3: true,
});
