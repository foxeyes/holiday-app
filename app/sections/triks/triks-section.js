import { HdElement } from '../../holiday/core/hd-element.js';

export class TriksSection extends HdElement {

}

TriksSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
TIPS & TRIKS
`;
TriksSection.is = 'triks-section';