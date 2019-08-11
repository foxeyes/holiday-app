import { HdElement } from '../../holiday/core/hd-element.js';

export class TemplatesSection extends HdElement {

}

TemplatesSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
TEMPLATES
`;
TemplatesSection.is = 'templates-section';