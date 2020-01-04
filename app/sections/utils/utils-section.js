import { HdElement } from '../../holiday/core/hd-element.js';

export class UtilsSection extends HdElement {

}

UtilsSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
TOOLS
`;
UtilsSection.is = 'utils-section';
