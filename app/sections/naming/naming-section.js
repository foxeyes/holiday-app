import {HdElement} from '../../holiday/core/hd-element.js';

export class NamingSection extends HdElement {

}

NamingSection.template = /*html*/ `
<style>
  @import 'css/section-common.css';
</style>
<column-mkp>
  <heading-layout>
    <image-mkp class="logo-img" src="assets/img/logo_compact.svg"></image-mkp>
    <h2>Naming Convention</h2>
  </heading-layout>
  <p>Naming</p>
  <code-mkp src="./code-reference/styling/styling.js" highlight></code-mkp>
</column-mkp>
`;
NamingSection.is = 'naming-section';
