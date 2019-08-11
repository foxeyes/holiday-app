import { HdElement } from '../../holiday/core/hd-element.js';

export class ToolsSection extends HdElement {

}

ToolsSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
TOOLS
`;
ToolsSection.is = 'tools-section';