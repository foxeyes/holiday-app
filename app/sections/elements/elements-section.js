import {HdElement} from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';
import {ShowcaseCom} from '../../components/showcase/showcase-com.js';
import {UI_LIB, MKP_LIB, AL_LIB} from './el-lib.js';

const CTX = {
  UI: 'ui',
  MKP: 'mkp',
  AL: 'al',
};

export class ElementsSection extends HdElement {

  constructor() {
    super();
    this.state = {
      ctx: CTX.UI,
      dom: {
        ui: this.prepareDomFragment(UI_LIB, ShowcaseCom),
        mkp: this.prepareDomFragment(MKP_LIB, ShowcaseCom),
        al: this.prepareDomFragment(AL_LIB, ShowcaseCom),
      },
      on: {
        ctxSelected: (val) => {
          this.setStateProperty({
            'ctx': val,
          });
        },
      },
    };
    console.log(this.state)

  }

}

ElementsSection.template = /*html*/ `
<style>
${COMMON_STYLES}
</style>
<column-mkp>
  <heading-layout-css>
    <image-mkp class="logo-img" src="assets/img/hd_min.png"></image-mkp>
    <h2>Holiday Elements</h2>
  </heading-layout-css>
  <tab-selector-ui bind="onValueChange: on.ctxSelected">
    <tab-option-ui icon="cursor" value="${CTX.UI}">UI Primitives</tab-option-ui>
    <tab-option-ui icon="mkp" value="${CTX.MKP}">Markup Blocks</tab-option-ui>
    <tab-option-ui icon="layout" value="${CTX.AL}">Active Layouts</tab-option-ui>
  </tab-selector-ui>
  <space-css max></space-css>
  <ctx-al bind="current: ctx">
    <div ctx="ui" bind="innerDOM: dom.ui"></div>
    <div ctx="mkp" bind="innerDOM: dom.mkp"></div>
    <div ctx="al" bind="innerDOM: dom.al"></div>
  </ctx-al>
  <space-css max></space-css>
</column-mkp>
`;
ElementsSection.is = 'elements-section';
