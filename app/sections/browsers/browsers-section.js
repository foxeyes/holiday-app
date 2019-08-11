import { HdElement } from '../../holiday/core/hd-element.js';

export class BrowsersSection extends HdElement {

}

BrowsersSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
BROWSERS
`;
BrowsersSection.is = 'browsers-section';