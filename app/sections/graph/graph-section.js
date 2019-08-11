import { HdElement } from '../../holiday/core/hd-element.js';

export class GraphSection extends HdElement {

}

GraphSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
GRAPH
`;
GraphSection.is = 'graph-section';