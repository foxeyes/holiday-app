import {Holiday} from '../holiday/core/holiday.js';
import { } from '../holiday/elements/exports.js';
import { } from '../components/components.js';
import { } from '../sections/sections.js';

import {STATE_MAP} from '../state/app-state.js';
Holiday.applyGlobalStateScheme(STATE_MAP);

import {ROUTES} from '../routing/app-routes.js';
Holiday.connectRouter('ui.routing', ROUTES);

import {IconMkp} from '../holiday/elements/mkp/icon/icon-mkp.js';
import {ICONS} from '../icons/app-icons.js';
IconMkp.addIcons(ICONS);

class AppIndex extends Holiday {

  constructor() {
    super();

    this.state = {
      section: {
        caption: 'Section Title',
        icon: 'home',
      },
    };

    this.subscribe('ui.routing', (val) => {
      if (!val) {
        return;
      }
      this.setStateProperty({
        'section.caption': val.options.title,
        'section.icon': val.options.icon,
      });
      this.textContent = '';
      let section = document.createElement(val.route + '-section');
      this.appendChild(section);
      window.scrollTo(0, 0);
    });

  }

}

AppIndex.template = /*html*/ `
<style>
  :host {
    display: block;
  }
</style>
<app-shell-al bind="caption: section.caption; icon: section.icon">
  <global-menu-com slot="menu"></global-menu-com>
  <slot></slot>
</app-shell-al>
`;
AppIndex.is = 'app-index';
