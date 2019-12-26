import {HdElement} from '../../holiday/core/hd-element.js';

class LifecycleExample extends HdElement {

  constructor() {
    super();

    // Defining of initial state:
    this.state = {
      name: '',
      bigName: '',
    };

    /* In some cases, Element can be created and added to DOM as "unknown element" before
    Custom Element registration stage finishing.
    To prevent property loss, use "defineAccessor" method */
    this.defineAccessor('name', (name) => {
      this.setStateProperty('name', name);
    });

    // Element is not placed in DOM yet
    // Shadow DOM and template can be safely changed without immediate rendering in browser

  }

  connectedCallback() {
    super.connectedCallback();
    // Element added to DOM
    // Here you can get access to own children or DOM attributes
  }

  stateUpdated(path) {
    // Can be used for work with computed properties:
    if (path === 'name') {
      this.setStateProperty('bigName', this.state.name.toUpperCase());
    }
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    super.attributeChangedCallback(attributeName, oldValue, newValue);
    // This callback firing when DOM attributes, defined in "logicAttributes" list is changing
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Element is removed from DOM tree
  }

}
LifecycleExample.logicAttributes = [
  'name',
];
LifecycleExample.template = /*html*/ `
  <div bind="textContent: name"></div>
  <div bind="textContent: bigName"></div>
`;

// Registration stage (CustomElementRegistry):
LifecycleExample.is = 'lifecycle-example';
