import {Holiday} from '../../holiday/core/holiday.js';

class HolidayApp extends Holiday {
  constructor() {
    super();
    // ...

    // Bind global state property to local:
    this.reflectGlobalProperty('global.prop', 'local.prop', (propValue) => {
      // ...
    });

    // Publish to application state:
    this.publish('ui.loading', true);

    // Read from application state:
    this.readGlobalProperty('user.name');

    // Write to application state without notifications:
    this.globalState.silentWrite('user.name', 'John');

    // Go to route:
    this.appRouter.applyRoute('contacts');

    // ...
  }
}
