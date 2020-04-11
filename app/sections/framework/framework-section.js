import {HdElement} from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';

export class FrameworkSection extends HdElement {}

FrameworkSection.template = /*html*/ `
<style>
${COMMON_STYLES}
</style>
<column-mkp>
  <heading-layout-css>
    <image-mkp class="logo-img" src="assets/img/hd_min.png"></image-mkp>
    <h2>Holiday Framework</h2>
  </heading-layout-css>
  <space-css max></space-css>
  <info-css>
    Holiday.js can be used as library and as a framework.
  </info-css>
  <p>
    Most of the Holiday <a href="https://github.com/foxeyes/holiday/tree/master/core" target="_blank">core classes</a> are designed to be independent and useful separately from others.
    But if you agree to use all of them as the base of your application, you can choose common unified class:
  </p>
  <code-mkp src="./code-reference/framework/holiday.js" highlight></code-mkp>
  <p>Other useful methods and properties:</p>
  <code-mkp src="./code-reference/framework/holiday-other.js" highlight></code-mkp>
</column-mkp>
`;
FrameworkSection.is = 'framework-section';
