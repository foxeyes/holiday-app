import {HdElement} from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';

export class NamingSection extends HdElement {}

NamingSection.template = /*html*/ `
<style>
${COMMON_STYLES}
</style>
<column-mkp>
  <heading-layout>
    <image-mkp class="logo-img" src="assets/img/logo_compact.svg"></image-mkp>
    <h2>Naming Convention</h2>
  </heading-layout>
  <div class="info">
    All Custom Elements use the same registry in browser window, so it very important to define naming convention for your projects
    to avoid name intersections
  </div>
  <p>
    Custom tags should have a dash symbol in their names by standard, so every name will be splitted in two parts as minimum.
    That can be used for standard postfix definitions, to mark element types.
  </p>
  <p>We suggest to use this simple naming principles:</p>
  <code-mkp src="./code-reference/naming/naming.txt" highlight custom></code-mkp>
  <p>Examples:</p>
  <code-mkp src="./code-reference/naming/naming-example.txt" highlight></code-mkp>
</column-mkp>
`;
NamingSection.is = 'naming-section';
