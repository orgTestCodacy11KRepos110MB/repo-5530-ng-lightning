import {Component} from 'angular2/core';
import {NGL_DIRECTIVES} from '../../../dist/ng-lightning';
import {Plunker} from './playground/plunker';

import {DemoBadges} from './components/badges/badges';
import {DemoButtons} from './components/buttons/buttons';
import {DemoIcons} from './components/icons/icons';
import {DemoAvatars} from './components/images/images';
import {DemoMenus} from './components/menus/menus';
import {DemoModals} from './components/modals/modals';
import {DemoPaginations} from './components/paginations/paginations';
import {DemoPopovers} from './components/popovers/popovers';
import {DemoRatings} from './components/ratings/ratings';
import {DemoSpinners} from './components/spinners/spinners';
import {DemoTabs} from './components/tabs/tabs';

export interface IComponent {
  key: string;
  component: any;
  title?: string;
  readme?: string;
  html?: string;
  htmlRaw?: string;
  ts?: string;
  tsRaw?: string;
  api?: string;
};

const components: any[] = [
  { key: 'badges', component: DemoBadges },
  { key: 'buttons', component: DemoButtons },
  { key: 'icons', component: DemoIcons },
  { key: 'images', component: DemoAvatars },
  { key: 'menus', component: DemoMenus },
  { key: 'modals', component: DemoModals },
  { key: 'paginations', component: DemoPaginations },
  { key: 'popovers', component: DemoPopovers },
  { key: 'ratings', component: DemoRatings },
  { key: 'spinners', component: DemoSpinners },
  { key: 'tabs', component: DemoTabs },
];

const content = {};
components.forEach(component => {
  const { key } = component;
  const path = 'components/' + key + '/' + key;
  component.html = require('!!prismjs?lang=markup!./' + path + '.html');
  component.ts = require('!!string-replace?search=../../../../../dist&replace=ng-lightning!prismjs?lang=typescript!./' + path + '.ts');
  if (!component.title) {
    component.title = key.charAt(0).toUpperCase() + key.slice(1);
  }
  if (!component.readme) {
    component.readme = require('./components/' + key + '/README.md');
  }
  if (!component.api) {
    component.api = require('./components/' + key + '/API.md');
  }

  // Retrieve raw for live editing in plunker
  component.htmlRaw = require('!!raw!./' + path + '.html');
  component.tsRaw = require('!!raw!./' + path + '.ts');
});


@Component({
  template: require('./demo.jade')({ content, components }),
  directives: [NGL_DIRECTIVES, Plunker].concat(components.map((c: any) => c.component)),
})
export class DemoRoute {
  selectedTab: string[] = [];

  getComponent(key: string): IComponent {
    for (var i = 0, ii = components.length; i < ii; i++) {
      if (components[i].key === key) {
        return components[i];
      }
    }
  }

}
