import { HdElement, HdState, HdRouter } from '../holiday/core/holiday.js';
import { } from '../holiday/elements/exports.js';
import { } from '../components/components.js';
import { } from '../sections/sections.js';

import { ROUTES } from '../routing/app-routes.js';
HdRouter.setRoutingMap(ROUTES);

import { STATE_MAP } from '../state/app-state.js';
HdState.applyScheme(STATE_MAP);

import { IconMkp } from '../holiday/elements/mkp/icon/icon-mkp.js';
import { ICONS } from '../icons/app-icons.js';
IconMkp.addIcons(ICONS);

class AppIndex extends HdElement {

  constructor() {
    super();

    this.state = {
      section: {
        title: 'Section Title',
        icon: 'home',
      },
    };

    window.addEventListener('hd-on-route', (e) => {
      // @ts-ignore
      HdState.publish('ui.route', e.detail);
    });

    HdState.subscribe('ui.route', (val) => {
      if (!val) {
        return;
      }
      this.setStateProperty({
        'section.title': val.options.title,
        'section.icon': val.options.icon,
      });
      this.textContent = '';
      let section = document.createElement(val.route + '-section');
      this.appendChild(section);
    });

  }

  connectedCallback() {
    super.connectedCallback();
    HdRouter.notify();
  }

}

AppIndex.template = /*html*/ `
<style>
  :host {
    display: block;
  }
</style>
<app-shell-al bind="title: section.title; icon: section.icon">
  <top-menu-com slot="menu"></top-menu-com>
  <slot></slot>
</app-shell-al>
`;
AppIndex.is = 'app-index';