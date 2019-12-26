import { HdElement } from '../../holiday/core/hd-element.js';

export class LifecycleSection extends HdElement {}

LifecycleSection.template = /*html*/ `
<style>
  @import 'css/section-common.css';
</style>
<column-mkp>
  <heading-layout>
    <image-mkp class="logo-img" src="assets/img/logo_compact.svg"></image-mkp>
    <h2>Component Lifecycle</h2>
  </heading-layout>
  <p>Holiday-component lifecycle is very close to native web-components:</p>
  <code-mkp src="./code-reference/lifecycle/lc-example.js" highlight></code-mkp>
  <p>As you can see, ...</p>
</column-mkp>
`;
LifecycleSection.is = 'lifecycle-section';
