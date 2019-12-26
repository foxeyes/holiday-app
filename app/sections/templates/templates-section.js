import { HdElement } from '../../holiday/core/hd-element.js';

export class TemplatesSection extends HdElement {}

TemplatesSection.template = /*html*/ `
<style>
  @import 'css/section-common.css';
</style>
<column-mkp>
  <image-mkp class="logo-img" src="assets/img/logo_compact.svg"></image-mkp>
  <h2>Templates</h2>
  <p>Holiday.js templates providing native HTML and CSS syntax inside standard JavaScript template literals.</p>
  <code-mkp src="./code-reference/templates/tpl.js" highlight></code-mkp>
</column-mkp>
`;
TemplatesSection.is = 'templates-section';
