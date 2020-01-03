import {HdState} from '../../holiday/core/hd-state.js';

// Subscription:
HdState.subscribe('ui.loading', (val) => {
  console.log(val);
});

// Publication:
HdState.publish('ui.loading', true);

// Or:
HdState.publish({
  'ui.loading': true,
  'ui.sidePanelActive': true,
});
