import {Holiday, HdRouter} from '../../holiday/core/holiday.js';
import {ROUTES} from '../../routing/app-routes.js';

class GlobalMenuCom extends Holiday {

  constructor() {
    super();

    this.subscribe('ui.routing', (val) => {
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

GlobalMenuCom.template = /*html*/ `
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
  .support > a {
    color: currentColor;
  }
</style>
${Object.keys(ROUTES).map((route) => {
  if (!ROUTES[route].hideFromMenu) {
    return /*html*/ `<button-ui icon="${ROUTES[route].icon}" route="${route}">${ROUTES[route].title}</button-ui>`;
  }
}).join('')}
<div class="support">
  Suported by <a href="https://cmplx.systems/" target="_blank">CMPLX.systems</a>
</div>
`;
GlobalMenuCom.is = 'global-menu-com';

export { GlobalMenuCom };
