import {HdElement} from '../../holiday/core/hd-element.js';

export class MyElement extends HdElement {
  constructor() {
    super();
    this.state = {
      on: {
        buttonPress: (e) => {
          window.alert(e.target.textContent);
        },
      },
    };
  }
}

MyElement.template = /*html*/ `
<style>
  @import 'css/my-button.css';
  :host {
    display: block;
  }
</style>
<my-button icon="❤️" bind="onclick: on.buttonPress">My Button</my-button>
`;

MyElement.is = 'my-element';
