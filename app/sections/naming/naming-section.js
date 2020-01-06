import {HdElement} from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';

export class NamingSection extends HdElement {}

NamingSection.template = /*html*/ `
<style>
${COMMON_STYLES}
</style>
<column-mkp>
  <heading-layout-css>
    <image-mkp class="logo-img" src="assets/img/logo_compact.svg"></image-mkp>
    <h2>Naming Convention</h2>
  </heading-layout-css>
  <info-css>
    All Custom Elements use the same registry in browser window, so it very important to define naming convention for your projects
    to avoid name intersections
  </info-css>
  <p>
    Custom tags should have a dash symbol in their names by standard, so every name will be splitted in two parts as minimum.
    That can be used for standard postfix definitions, to mark element types.
  </p>
  <p>We suggest to use this simple naming principles:</p>
  <code-mkp src="./code-reference/naming/naming.txt" highlight custom></code-mkp>
  <p>Examples:</p>
  <code-mkp src="./code-reference/naming/naming-example.txt" highlight></code-mkp>
  <space-css max></space-css>
  <info-css>
    This approach is very helpful in project documentation and code navigation.
    Your teammates will always know where to find code for the certain place in UI just using dev-tools in browser.
  </info-css>
</column-mkp>
`;
NamingSection.is = 'naming-section';
