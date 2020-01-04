import { HdElement } from '../../holiday/core/hd-element.js';

export class StateSection extends HdElement {}

StateSection.template = /*html*/ `
<style>
  @import 'css/section-common.css';
</style>
<column-mkp>
  <heading-layout>
    <image-mkp class="logo-img" src="assets/img/logo_compact.svg"></image-mkp>
    <h2>Application State Management</h2>
  </heading-layout>
  <p>Holiday.js provide flexible and performant solution for application-level state management: <a href="https://github.com/foxeyes/holiday/blob/master/core/hd-state.js" target="_blank">HdState</a>.</p>
  <p>HdState implements well known <a href="https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern" target="_blank">Pub/Sub</a>
  pattern and very easy to use anywhere in your code:</p>
  <code-mkp src="./code-reference/state/pub-sub.js" highlight></code-mkp>
  <p>Before get access to application properties, you need to define global state scheme. It should be done once:</p>
  <code-mkp src="./code-reference/state/state-scheme.js" highlight></code-mkp>
  <p>To avoid memory leaks, you need to unsubscribe from data when it not needed anymore:</p>
  <code-mkp src="./code-reference/state/unsubscribe.js" highlight></code-mkp>
  <p>Read current property value:</p>
  <code-mkp src="./code-reference/state/read.js" highlight></code-mkp>
  <p>Write property value without subscribers notification:</p>
  <code-mkp src="./code-reference/state/silent.js" highlight></code-mkp>
  <p>Notify all property subscribers and handle property value:</p>
  <code-mkp src="./code-reference/state/notify.js" highlight></code-mkp>
</column-mkp>
`;
StateSection.is = 'state-section';
