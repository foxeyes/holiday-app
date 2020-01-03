class MyComponent extends HdElement {
  constructor() {
    super();
    this.state = {
      html: '<div>Initial Content</div>',
    };
  }

  set data(data) {
    this.setStateProperty({
      'html': data.map(item => `<data-item>${item.text}</data-item>`).join(''),
    });
  }

}

MyComponent.template = /*html*/ `
<div class="menu" bind="innerHTML: html"></div>
`;
