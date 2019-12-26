import { HdElement } from '../../holiday/core/hd-element.js';

export class TriksSection extends HdElement {
  constructor() {
    super();
    this.state = {
      on: {
        dumbButtonPress: (e) => {
          alert(e.target.textContent);
        },
      },
    };
  }
}

TriksSection.template = /*html*/ `
<style>
  @import 'css/section-common.css';
</style>
<column-mkp>
  <h2>Custom Elements with CSS only</h2>
  <p>Since Custon Elements become a standard, we have a safe way to create custom tags using dash symbol ("-").
    Now we can create custom semantic in our markup and don't be afraid of conflicts with a native tags.</p>
  <p>Please, take in account, that default value of CSS "display" property for any custom or unknown elements is "inline".</p>
  <h3>Elemnt styles can be defined in separate CSS file:</h3>
  <code-mkp src="./code-reference/triks/my-button.css" highlight></code-mkp>
  <h3>Than you can use it anywhere you need via CSS-import:</h3>
  <code-mkp src="./code-reference/triks/css-component-usage.js" highlight></code-mkp>
  <dumb-space max></dumb-space>
  <h3>Here is the result:</h3>
  <dumb-button icon="❤️" bind="onclick: on.dumbButtonPress">Click Me!</dumb-button>
  <dumb-space max></dumb-space>
  <h2>Attribute type="module"</h2>
  <p></p>
</column-mkp>




`;
TriksSection.is = 'triks-section';
