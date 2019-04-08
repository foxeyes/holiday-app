import { HdElement, HdRouter, HdState } from '../../holiday/core/holiday.js';

class TopMenuCom extends HdElement {

  constructor() {
    super();

    HdState.subscribe('ui.route', (val) => {
      if (!val) {
        return;
      }
      let active = this.$.querySelector('[active]')
      if (active) {
        active.removeAttribute('active');
      }
      this.$.querySelector(`[route="${val.route}"]`).setAttribute('active', '');
    });

  }

  connectedCallback() {
    super.connectedCallback();
    [...this.$.querySelectorAll('[route]')].forEach((btn) => {
      // @ts-ignore
      btn.onclick = () => {
        HdRouter.applyRoute(btn.getAttribute('route'));
      };
    });
  }

}

TopMenuCom.template = /*html*/ `
<style>
  :host {
    display: grid;
    grid-gap: var(--gap-min, 2px);
  }
  [active] {
    --color: var(--color-theme-1);
    --bg-color: var(--color-theme-2);
    pointer-events: none;
  }
  .support {
    text-align: center;
    opacity: 0.6;
    font-size: 0.8em;
    padding-top: 1em;
    margin-top: 1em;
    border-top: 1px dotted currentColor;
  }
</style>
<button-ui icon="home" route="basics">Basics</button-ui>
<button-ui icon="template" route="templates">Templates</button-ui>
<button-ui icon="state" route="state">State Management</button-ui>
<button-ui icon="route" route="routing">App Routing</button-ui>
<button-ui icon="palette" route="styling">Styling</button-ui>
<button-ui icon="cursor" route="elements">UI Elements</button-ui>
<button-ui icon="icon" route="icons">Icons</button-ui>
<button-ui icon="mono" route="mono">MONO Design System</button-ui>
<button-ui icon="graph" route="graph">Complex Data</button-ui>
<button-ui icon="trik" route="triks">Tips & Triks</button-ui>
<button-ui icon="bench" route="benchmarks">Benchmarks</button-ui>
<button-ui icon="tool" route="tools">Tools</button-ui>
<button-ui icon="browser" route="browsers">Browser Support</button-ui>
<div class="support">
  Suported by CMPLX.systems
</div>
`;
TopMenuCom.is = 'top-menu-com';

export { TopMenuCom };