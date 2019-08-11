import { HdElement } from '../../holiday/core/hd-element.js';

export class ElementsSection extends HdElement {

}

ElementsSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
ELEMENTS
`;
ElementsSection.is = 'elements-section';