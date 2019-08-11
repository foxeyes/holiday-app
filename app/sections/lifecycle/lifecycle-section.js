import { HdElement } from '../../holiday/core/hd-element.js';

export class LifecycleSection extends HdElement {

}

LifecycleSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
LIFECYCLE
`;
LifecycleSection.is = 'lifecycle-section';