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
  <p>Holiday-component lifecycle is very close to
    <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements">native Custom Elements</a>:</p>
  <code-mkp src="./code-reference/lifecycle/lc-example.js" highlight></code-mkp>
  <p>That's all. Looks simple, isn't it?</p>
</column-mkp>
`;
LifecycleSection.is = 'lifecycle-section';
