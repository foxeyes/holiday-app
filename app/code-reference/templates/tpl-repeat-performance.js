import {HdElement} from '../../holiday/core/hd-element.js';
import {PersonCard} from '../my-hd-components/person-card.js';

const DATA = [
  {
    firstName: 'John',
    secondName: 'Snow',
  },
  {
    firstName: 'Jane',
    secondName: 'Flower',
  },
];

class MyComponent extends HdElement {
  constructor() {
    super();
    this.state = {
      list: {
        // This will iterate DATA array and create PersonCard components with dataProperty applied:
        dom: this.prepareDomFragment(DATA, PersonCard, null, 'dataProperty'),
      },
    };

    // Alternative dynamic way:
    window.setTimeout(() => {
      this.prepareDomFragment(DATA, PersonCard, 'list.dom', 'dataProperty');
    }, 1000);
  }
}

// Use "innerDOM" property to insert document fragment into template:
MyComponent.template = /*html*/ `
<div class="list" bind="innerDOM: list.dom"></div>
`;
