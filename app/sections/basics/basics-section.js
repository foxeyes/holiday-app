import {HdElement} from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';

export class BasicsSection extends HdElement {}

BasicsSection.template = /*html*/ `
<style>
${COMMON_STYLES}
</style>
<column-mkp>
<image-mkp class="head-img" src="assets/img/logo.svg"></image-mkp>
<h2>Lightweight and flexible UI-library for those who tired of all that js-frameworks</h2>
<p>You should try it. And your work become Holiday. Really.</p>
<info-css>
  Before you start, don't miss the
  <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components docs</a></info-css>
<h2>One more JavaScript library? Oh, no...</h2>
<p>
  Wait. We are don't planning to hit you with a new syntax,
  complicated entities or new terminology. If you dreamt for a simple, friendly and performant
  solution for modern web development - here it is.
</p>
<h2>Concept Features</h2>
<ul>
  <li>Minimal overhead upon a native web-platform and DOM API</li>
  <li>Native syntax for templates and styling</li>
  <li>Full power of modern web-platform: Custom Elements, Shadow DOM, ES modules, CSS variables</li>
  <li>Minimalistic toolchain: can work directly in any modern browser, without any additional build process setting</li>
  <li>All inclusive: application routing, state management, UI-library, design system and more...</li>
  <li>Lightweight and "tree shaking" friendly: use what you need only</li>
  <li>Fast as lightning: Holiday.js not using any additional processing for templates in JavaScript runtime for component instances</li>
  <li>Flexible and extensible: standard class-based syntax allows you to extend any core-class as you want</li>
  <li>Easy to understand, easy to use: probably, you already know all you need</li>
</ul>
<h2>Discover</h2>
<info-css>
  This documentation site is build with Holiday.js and no any additional build process was used. You can discover it's source code directly
in dev-tools of your browser.
</info-css>
<h2>Component Code Example</h2>
<code-mkp src="./code-reference/basics/my-component.js" highlight></code-mkp>
<h2>Installation (using git)</h2>
<code-mkp terminal>git submodule add -b master https://github.com/foxeyes/holiday holiday</code-mkp>
<p>
 Git-module approach allows you to put your dependency to any path in project structure you prefer, select branches
 and versions, create your own branches and use git tooling to manage code more flexible.
</p>

<h2>For getting updates:</h2>
<code-mkp terminal>git submodule update --init --recursive --remote</code-mkp>
<h2>Freedom matters</h2>
<p>
  Holiday.js can be used with any other popular UI-library or framework, such as React, Angular or Vue.js.
  You can create set of common reusable components for different ecosystems without extra complexity.
  You can use modern JavaScript or TypeScript as well. You can use any build system you prefer, or publish raw code using HTTP/2 advantages.
  Also, Holiday.js is a nice solution to build Electron applications, PWA or mobile apps based on web platform.
</p>
<p>
  <a href="https://github.com/foxeyes/holiday">View code on GitHub</a>
</p>
<info-css>
  Now relax and enjoy your Holiday! =)
</info-css>
</column-mkp>
`;
BasicsSection.is = 'basics-section';

