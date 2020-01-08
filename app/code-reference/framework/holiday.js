import {Holiday} from '../../holiday/core/holiday.js';

// Create application global state description:
Holiday.applyGlobalStateScheme({
  'router': {
    type: Object,
    value: null,
  },
  // other properties...
});

// Connect application router:
Holiday.connectRouter('router', {
  'homepage': {
    title: 'My Application',
    icon: 'home',
  },
  // other routes...
}, /* Use custom separator for props: */ ':');

class HolidayApp extends Holiday {
  constructor() {
    super();
    this.state = {
      currentSection: '',
    };

    // This subscribtion will be automatically removed after detouch from DOM:
    this.subscribe('router', (router) => {
      this.setStateProperty('currentSection', router.route);
      console.log(router.options);
    });
  }
}

HolidayApp.template = /*html*/ `
<style>
  :host {
    display: block;
  }
</style>
<div bind="textContent: currentSection"></div>
`;

HolidayApp.is = 'holiday-app';
