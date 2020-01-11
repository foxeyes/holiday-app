import {HdElement} from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';

export class MonoSection extends HdElement {}

const MONO_EXAMPLE = /*html*/ `
<grid-mkp columns="repeat(4, min-content)" gap="var(--gap-min)">
  <button-ui icon="plus"></button-ui>
  <space-css></space-css>
  <input-ui shade></input-ui>
  <button-ui icon="arrow" shade></button-ui>
</grid-mkp>
<button-ui rounded outline icon="close"></button-ui>
`;

MonoSection.template = /*html*/ `
<style>
${COMMON_STYLES}
mono-css {
  --ui-radius: 4px;
  --shade-opacity: 0.15;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: var(--gap-mid);
  color: var(--color);
  background-color: var(--bg-color);
}
mono-css[dark] {
  --color: rgb(60, 250, 100);
  --bg-color: #000;
}
mono-css[bright] {
  --color: #000;
  --bg-color: #eee;
}
</style>
<column-mkp>
  <heading-layout-css>
    <image-mkp class="logo-img" src="assets/img/logo_compact.svg"></image-mkp>
    <h2>MONO Design System</h2>
  </heading-layout-css>
  <space-css max></space-css>
  <info-css>MONO - means monochrome. You can use only two colors for your color schemes.</info-css>
  <h2>Advantages</h2>
  <ul>
    <li>Minimalistic but sufficient visual languige</li>
    <li>Simplicity for developers: easy usage and customization</li>
    <li>Adaptivity: can be used on mobile and desktop platforms</li>
    <li>Connectivity: all elements should fit others in panels and toolbars</li>
  </ul>
  <h2>API</h2>
  <p>Application theme example:</p>
  <code-mkp src="./code-reference/mono/theme.css" highlight></code-mkp>
  <p>This variables are used in Holiday Elements library. That's all you need to customize it.</p>
  <h2>Usage Example</h2>
  <p>Dark theme:</p>
  <mono-css dark>${MONO_EXAMPLE}</mono-css>
  <p>Bright theme:</p>
  <mono-css bright>${MONO_EXAMPLE}</mono-css>
  <space-css max></space-css>
</column-mkp>
`;
MonoSection.is = 'mono-section';
