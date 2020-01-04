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
      <h2>&lt;button-ui&gt;</h2>
      <button-ui icon="star">Click Me!</button-ui>
      <h2>&lt;checkbox-ui&gt;</h2>
      <checkbox-ui icon="star">Check Me!</checkbox-ui>
      <h2>&lt;radio-ui&gt;</h2>
      <grid-mkp gap="10px">
        <radio-ui name="radio">Option 1</radio-ui>
        <radio-ui name="radio">Option 2</radio-ui>
      </grid-mkp>
      <h2>&lt;input-ui&gt;</h2>
      <input-ui icon="star"></input-ui>
      <h2>&lt;select-ui&gt;</h2>
      <select-ui>
        <option-ui option="1">First Option</option-ui>
        <option-ui option="2">Second Option</option-ui>
        <option-ui option="3">Third Option</option-ui>
      </select-ui>
      <h2>&lt;tab-selector-ui&gt;</h2>
      <div style="display: inline-block">
        <tab-selector-ui>
          <tab-option-ui icon="star" value="1">First Tab</tab-option-ui>
          <tab-option-ui icon="star" value="2">Second Tab</tab-option-ui>
        </tab-selector-ui>
      </div>
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
