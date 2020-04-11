import {HdElement} from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';

export class LifecycleSection extends HdElement {}

LifecycleSection.template = /*html*/ `
<style>
${COMMON_STYLES}
</style>
<column-mkp>
  <heading-layout-css>
    <image-mkp class="logo-img" src="assets/img/hd_min.png"></image-mkp>
    <h2>Component Lifecycle</h2>
  </heading-layout-css>
  <p>Holiday-component lifecycle is very close to
    <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements">native Custom Elements</a>:</p>
  <code-mkp src="./code-reference/lifecycle/lc-example.js" highlight></code-mkp>
  <p>That's all. Looks simple, isn't it?</p>
</column-mkp>
`;
LifecycleSection.is = 'lifecycle-section';
