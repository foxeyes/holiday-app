import {HdElement} from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';

export class StylingSection extends HdElement {}

StylingSection.template = /*html*/ `
<style>
${COMMON_STYLES}
</style>
<column-mkp>
  <heading-layout-css>
    <image-mkp class="logo-img" src="assets/img/logo_compact.svg"></image-mkp>
    <h2>Styling</h2>
  </heading-layout-css>
  <p>As a regular web-components, every Holiday-component can have it's own isolated style section in template:</p>
  <code-mkp src="./code-reference/styling/styling.js" highlight></code-mkp>
  <p>Every Custom Element has "inline" display property by default. Don't forget to set correct value in ":host" selector.</p>
  <h2>Share Styles</h2>
  <p>Its easy to safely share common styles for any group of your components:</p>
  <code-mkp src="./code-reference/styling/styling-share.js" highlight></code-mkp>
  <p>In all that cases styles could be cached in browser, so you don't need to spend extra traffic on it.</p>
  <p>Shadow DOM will protect your styles of any leaks. You don't need to use long overcomplicated classnames anymore.</p>
  <h2>Variables and Mixins</h2>
  <code-mkp src="./code-reference/styling/styling-vars.js" highlight></code-mkp>
  <p>Shadow DOM is transparent for CSS-variables, and they can be redefined at the any level of DOM-tree.
    It can be used for build themes and modern design systems.</p>
  <p>More details about Shadow DOM styling <a href="https://javascript.info/shadow-dom-style" target="_blank">you can find here</a>.</p>
  <space-css max></space-css>
</column-mkp>
`;
StylingSection.is = 'styling-section';
