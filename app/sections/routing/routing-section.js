import { HdElement } from '../../holiday/core/hd-element.js';

export class RoutingSection extends HdElement {}

RoutingSection.template = /*html*/ `
<style>
  @import 'css/section-common.css';
</style>
<column-mkp>
  <heading-layout>
    <image-mkp class="logo-img" src="assets/img/logo_compact.svg"></image-mkp>
    <h2>Application Routing</h2>
  </heading-layout>
  <p>HdRouter is based on <a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" target="_blank">History API</a>
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
