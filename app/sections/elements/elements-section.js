import {HdElement} from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';
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
      html: {
        ui: '',
        mkp: '',
        al: '',
      },
      on: {
        ctxSelected: (val) => {
          this.setStateProperty({
            'ctx': val,
          });
        },
      },
    };

    /**
     *
     * @param {String} path
     * @param {UI_LIB | MKP_LIB | AL_LIB} src
     */
    const renderBlock = (path, src) => {
      let html = '';
      for (let tag in src) {
        html += /*html*/ `<showcase-com tag-name="${tag}" demo-url="${src[tag].demo}" github-link="${src[tag].gh}"></showcase-com>`;
      }
      this.setStateProperty(path, html);
    };

    renderBlock('html.ui', UI_LIB);
    renderBlock('html.mkp', MKP_LIB);
    renderBlock('html.al', AL_LIB);
  }

}

ElementsSection.template = /*html*/ `
<style>
${COMMON_STYLES}
</style>
<column-mkp>
  <heading-layout>
    <image-mkp class="logo-img" src="assets/img/logo_compact.svg"></image-mkp>
    <h2>Holiday Elements</h2>
  </heading-layout>
  <tab-selector-ui bind="onValueChange: on.ctxSelected">
    <tab-option-ui icon="cursor" value="${CTX.UI}">UI Primitives</tab-option-ui>
    <tab-option-ui icon="mkp" value="${CTX.MKP}">Markup Blocks</tab-option-ui>
    <tab-option-ui icon="layout" value="${CTX.AL}">Active Layouts</tab-option-ui>
  </tab-selector-ui>
  <space-dumb max></space-dumb>
  <ctx-al bind="current: ctx">
    <div ctx="ui" bind="innerHTML: html.ui"></div>
    <div ctx="mkp" bind="innerHTML: html.mkp"></div>
    <div ctx="al" bind="innerHTML: html.al"></div>
  </ctx-al>
  <space-dumb max></space-dumb>
</column-mkp>
`;
ElementsSection.is = 'elements-section';
