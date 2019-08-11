import { HdElement } from '../../holiday/core/hd-element.js';

export class IconsSection extends HdElement {

}

IconsSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
ICONS
`;
IconsSection.is = 'icons-section';