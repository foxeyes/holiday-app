const TEMPLATE = /*html*/ `
<style>
  :host {
    display: block;
  }
</style>
<div></div>
<slot></slot>
`;

// Then you can use it with your component:
MyComponent.template = TEMPLATE;
