import { HdElement } from '../../holiday/core/hd-element.js';

export class StylingSection extends HdElement {

}

StylingSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
STYLING
`;
StylingSection.is = 'styling-section';