import { HdElement } from '../../holiday/core/hd-element.js';

export class RoutingSection extends HdElement {

}

RoutingSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
ROUTING
`;
RoutingSection.is = 'routing-section';