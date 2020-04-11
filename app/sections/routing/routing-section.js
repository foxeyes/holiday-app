import { HdElement } from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';

export class RoutingSection extends HdElement {}

RoutingSection.template = /*html*/ `
<style>
${COMMON_STYLES}
</style>
<column-mkp>
  <heading-layout-css>
    <image-mkp class="logo-img" src="assets/img/hd_min.png"></image-mkp>
    <h2>Application Routing</h2>
  </heading-layout-css>
  <p><a href="https://github.com/foxeyes/holiday/blob/master/core/hd-router.js" target="_blank">HdRouter</a>
  is based on <a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" target="_blank">History API</a>
  and provide base navigation mechanics for your SPA:</p>
  <code-mkp src="./code-reference/routing/routing.js" highlight></code-mkp>
  <p>URL example:</p>
  <code-mkp terminal>?contacts&opt1=value1&opt2=value2&opt3</code-mkp>
  <p>Custom propperty separators are supported:</p>
  <code-mkp src="./code-reference/routing/separator.js" highlight></code-mkp>
  <p>And you will get this:</p>
  <code-mkp terminal>?contacts:opt1=value1:opt2=value2:opt3</code-mkp>
</column-mkp>
`;
RoutingSection.is = 'routing-section';
