import {HdElement} from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';

export class TemplatesSection extends HdElement {}

TemplatesSection.template = /*html*/ `
<style>
${COMMON_STYLES}
</style>
<column-mkp>
  <heading-layout-css>
    <image-mkp class="logo-img" src="assets/img/logo_compact.svg"></image-mkp>
    <h2>Templates</h2>
  </heading-layout-css>
  <p>Holiday.js provides native HTML and CSS syntax for templates inside standard JavaScript template literals.</p>
  <p>As a regular JS-string, template can be defined in any place of your code, including external ES-module:</p>
  <code-mkp src="./code-reference/templates/tpl.js" highlight></code-mkp>
  <p>
    Template will be parsed once and used in browser without additional string processing stage in JavaScript environment.
    This aproach allows to render template and start to use DOM API for data bindings much faster.
  </p>
  <h2>Slots</h2>
  <p>
    Slots allow you to define placeholders in your template that can be filled with any markup fragment.
    Template describes Shadow DOM structure of your component, and Slot is like window to regular DOM.
    You can use several named Slots for multiple insertion points for external HTML-content or default one only.
  </p>
  <p>
    More details -
    <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots" target="_blank">MDN web docs</a>.
  </p>
  <p>Short example:</p>
  <code-mkp src="./code-reference/templates/tpl-slot.html" highlight></code-mkp>
  <p>Place content to slots:</p>
  <code-mkp src="./code-reference/templates/tpl-slot-place.html" highlight></code-mkp>
  <h2>Data Bindings</h2>
  <p>Use "bind" attribute to define property or handler binding to any element in template:</p>
  <code-mkp src="./code-reference/templates/tpl-bind.html" highlight></code-mkp>
  <p>Use "@" symbol before property name to create binding to attribute:</p>
  <code-mkp src="./code-reference/templates/tpl-bind-attr.html" highlight></code-mkp>
  <p>Updates:</p>
  <code-mkp src="./code-reference/templates/tpl-bind-update.js" highlight></code-mkp>
  <h2>Template Repeat</h2>
  <p>Static data source:</p>
  <code-mkp src="./code-reference/templates/tpl-repeat-src.js" highlight></code-mkp>
  <p>Static template:</p>
  <code-mkp src="./code-reference/templates/tpl-repeat.js" highlight></code-mkp>
  <p>Dynamic data:</p>
  <code-mkp src="./code-reference/templates/tpl-repeat-dynamic.js" highlight></code-mkp>
  <p>For other performance sensitive cases you can use <a href="https://github.com/foxeyes/holiday/tree/master/elements/al/repeat" target="_blank">this component</a>.</p>
  <h2>Syntax Highlighting</h2>
  <p>For your convenience, you can use one of the IDE extensions for HTML-syntax highlighting in ES6 Template Strings.</p>
  <p>For VS Code users, it can be "<a href="https://github.com/pushqrdx/vscode-inline-html" target="_blank">Inline HTML</a>".</p>
</column-mkp>
`;
TemplatesSection.is = 'templates-section';
