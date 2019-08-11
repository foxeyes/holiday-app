import { HdElement } from '../../holiday/core/hd-element.js';

export class MonoSection extends HdElement {

}

MonoSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
MONO
`;
MonoSection.is = 'mono-section';