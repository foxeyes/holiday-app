import { HdElement } from '../../holiday/core/hd-element.js';

class BasicsSection extends HdElement {

}

const EXAMPLE = `
import { HdElement } from './core/hd-element.js';

class MyComponent extends HdElement {
  constructor() {
    super();
    this.state = {
      imageURL: 'images/photo.jpg',
      firstName: 'John',
      secondName: 'Snow',
    };
  }
}

MyComponent.template = /*html*/ |str|
<style>
  :host {
    display: block;
    paddimg: 10px;
    background - color: #fff;
    color: #000;
  }
</style>
<img bind="src: imageURL" />
<div bind="textContent: firstName"></div>
<div bind="textContent: secondName"></div>
|str|;

MyComponent.is = 'my-component';
`;

BasicsSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
  .screenshot {
    display: block;
    object-fit: contain;
    object-position: center center;
    width: 100%;
    border: 1px solid currentColor;
  }
  .balls {
    display: block;
    width: 100%;
    height: 240px;
    object-fit: contain;
    object-position: center center;
  }
</style>
<column-mkp>
<h1>Holiday.js - lightweight and flexible UI-library for those who tired of all that js-frameworks</h1>
<img class="balls" src="assets/img/ball.png" alt="">
<h2>Concept</h2>
<ul>
  <li>Minimal overhead upon a native web platform and DOM API</li>
  <li>Native syntax for templates and styling</li>
  <li>Full power of modern web-platform: Custom Elements, Shadow DOM, ES modules, CSS variables</li>
  <li>Minimalistic toolchain: can work directly in any modern browser, without any additional build process setting</li>
  <li>Lightweight and "tree shaking" friendly: use what you need only</li>
  <li>Fast as lightning: Holiday.js not using string pre-processing for templates in js runtime</li>
  <li>Flexible and extensible: standard class-based syntax allows you to extend any core-class as you want</li>
  <li>Easy to understand, easy to use: probably, you already know all you need</li>
</ul>
<h2>Discover</h2>
This documentation site is build with Holiday.js and no any additional build process was used. You can discover it's source code directly
in dev-tools of your browser:
<space-mkp max></space-mkp>
<img class="screenshot" src="assets/img/devtools1.png">
<space-mkp max></space-mkp>
<h2>Component Code Example</h2>
<code-mkp>${EXAMPLE}</code-mkp>
<space-mkp max></space-mkp>
<h2>Installation (using git)</h2>
<code-mkp>git submodule add -b master https://github.com/foxeyes/holiday holiday</code-mkp>
<space-mkp max></space-mkp>
Git-module approach allows you to put your dependency to any path in project structure you prefer, select branches and versions, create your own branches and use git tooling to manage code more flexible.
<h2>For getting updates:</h2>
<code-mkp>git submodule update --init --recursive --remote</code-mkp>
<space-mkp max></space-mkp>
</column-mkp>
`;
BasicsSection.is = 'basics-section';

export { BasicsSection };