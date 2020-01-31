import {HdElement} from '../../holiday/core/hd-element.js';

export class PersonCard extends HdElement {
  constructor() {
    super();
    this.defineAccessor('dataProperty', (data) => {
      this.state = data;
    });
  }
}

MyComponent.template = /*html*/ `
<div bind="textContent: firstName"></div>
<div bind="textContent: secondName"></div>
`;
