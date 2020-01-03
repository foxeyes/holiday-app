const TEMPLATE = /*html*/ `
<style>
  :host {
    display: block;
  }
</style>
<div bind="textContent: content; onclick: on.elementClicked; @style: style"></div>
`;
