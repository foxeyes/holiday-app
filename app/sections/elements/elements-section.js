import {HdElement} from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';

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
      on: {
        ctxSelected: (val) => {
          this.setStateProperty({
            'ctx': val,
          });
        },
      },
    };
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

    <div ctx="ui">
      <showcase-com
        tag-name="button-ui"
        demo-url="./holiday/elements/ui/button/button-ui_test.html"
        github-link="https://github.com/foxeyes/holiday/tree/master/elements/ui/button"
        ></showcase-com>

      <showcase-com
        tag-name="checkbox-ui"
        demo-url="./holiday/elements/ui/checkbox/checkbox-ui_test.html"
        github-link="https://github.com/foxeyes/holiday/tree/master/elements/ui/checkbox"
        ></showcase-com>

      <showcase-com
        tag-name="radio-ui"
        demo-url="./holiday/elements/ui/radio/radio-ui_test.html"
        github-link="https://github.com/foxeyes/holiday/tree/master/elements/ui/radio"
        ></showcase-com>

      <showcase-com
        tag-name="input-ui"
        demo-url="./holiday/elements/ui/input/input-ui_test.html"
        github-link="https://github.com/foxeyes/holiday/tree/master/elements/ui/input"
        ></showcase-com>

      <showcase-com
        tag-name="select-ui"
        demo-url="./holiday/elements/ui/select/select-ui_test.html"
        github-link="https://github.com/foxeyes/holiday/tree/master/elements/ui/select"
        ></showcase-com>

      <showcase-com
        tag-name="tab-selector-ui"
        demo-url="./holiday/elements/ui/tab-selector/tab-selector-ui_test.html"
        github-link="https://github.com/foxeyes/holiday/tree/master/elements/ui/tab-selector"
        ></showcase-com>

    </div>

    <div ctx="mkp">

    </div>

    <div ctx="al">

    </div>

  </ctx-al>
  <space-dumb max></space-dumb>
</column-mkp>
`;
ElementsSection.is = 'elements-section';
