import {HdElement} from '../../holiday/core/hd-element.js';

class MyComponent extends HdElement {
  constructor() {
    super();
    this.state = {
      imageURL: 'images/photo.jpg',
      firstName: 'John',
      secondName: 'Snow',
    };
  }
}

MyComponent.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: 10px;
    background - color: #fff;
    color: #000;
  }
</style>
<img bind="src: imageURL" />
<div bind="textContent: firstName"></div>
<div bind="textContent: secondName"></div>
`;

MyComponent.is = 'my-component';
