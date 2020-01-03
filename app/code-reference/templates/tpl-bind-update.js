class MyComponent extends HdElement {

  constructor() {
    super();

    // Define component's state structure and initial values:
    this.state = {
      content: 'Initial Content',
      style: 'color: #f00',
      on: {
        clicked: () => {
          console.log('Clicked!');
        },
      },
    };

    // Than you can make updates:
    window.setTimeout(() => {
      // Single change:
      this.setStateProperty('content', 'Updated Content');

      // Or multiple:
      this.setStateProperty({
        'content': 'Updated Content',
        'style': 'color: #00f',
      });
    }, 1000);
  }

}
