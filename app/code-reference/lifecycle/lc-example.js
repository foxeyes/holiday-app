import {HdElement} from '../../holiday/core/hd-element.js';

class LifecycleExample extends HdElement {

  constructor() {
    super();

    // Define initial state of your component:
    this.state = {
      name: '',
      bigName: '',
    };

    /*
    In some cases, Element can be created and added to DOM as "unknown element" before
    Custom Element registration stage finished.
    To prevent property value loss, use "defineAccessor" method.
    Provided by HdElement class.
    */
    this.defineAccessor('name', (name) => {
      // Some accessor code:
      this.setStateProperty('name', name);
    });

    /*
    At the @constructor" stage, your Element is not placed in DOM yet.
    Shadow DOM and template can be safely changed without immediate rendering in browser
    */
  }

  connectedCallback() {
    super.connectedCallback();
    /*
    Native callback.
    Element added to DOM.
    Here you can get access to own children or DOM attributes of new Custom Element.
    */
  }

  stateUpdated(path) {
    /*
    Provided by HdElement.
    This callback can be used for computed properties:
    */
    if (path === 'name') {
      this.setStateProperty('bigName', this.state.name.toUpperCase());
    }

    // More details you can find in "State Management" section.
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    /*
    Native callback.
    Firing when DOM attributes, defined in "logicAttributes" list is changed.
    */
    super.attributeChangedCallback(attributeName, oldValue, newValue);
  }

  disconnectedCallback() {
    /*
    Native callback.
    Element is removed from DOM tree. Here you can unsubscribe from application data source
    or remove event listeners to avoid memory leaks
    */
  }

}

LifecycleExample.template = /*html*/ `
  <div bind="textContent: name"></div>
  <div bind="textContent: bigName"></div>
`;

/*
Define a list of HTML-element attributes which you need to react on.
All attribute values will be mapped to component properties automatically when change.
*/
LifecycleExample.logicAttributes = [
  'name',
];

/*
Component registration in browser's CustomElementRegistry.
Define new tag name here:
*/
LifecycleExample.is = 'lifecycle-example';
