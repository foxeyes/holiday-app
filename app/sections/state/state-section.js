import { HdElement } from '../../holiday/core/hd-element.js';

export class StateSection extends HdElement {

}

StateSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
STATE
`;
StateSection.is = 'state-section';