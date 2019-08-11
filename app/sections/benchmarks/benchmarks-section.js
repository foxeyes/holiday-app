import { HdElement } from '../../holiday/core/hd-element.js';

export class BenchmarksSection extends HdElement {

}

BenchmarksSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
</style>
BENCHMARKS
`;
BenchmarksSection.is = 'benchmarks-section';