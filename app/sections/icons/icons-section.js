import {HdElement} from '../../holiday/core/hd-element.js';
import {COMMON_STYLES} from '../common-styles.js';
import {IconMkp} from '../../holiday/elements/mkp/icon/icon-mkp.js';

IconMkp.addIcons({
  'arrow': 'M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z',
});

export class IconsSection extends HdElement {}

IconsSection.template = /*html*/ `
<style>
${COMMON_STYLES}
</style>
<column-mkp>
  <heading-layout-css>
    <image-mkp class="logo-img" src="assets/img/hd_min.png"></image-mkp>
    <h2>Icons</h2>
  </heading-layout-css>
  <p>Holiday.js use icons in <a href="https://developer.mozilla.org/en-US/docs/Web/SVG" target="_blank">SVG</a> format and support custom icon sets.</p>
  <p>For code size and performance optimization purposes, icon definitions contains curve descriptions only: "d" attribute values for "path" SVG tags:</p>
  <code-mkp src="./code-reference/icons/icons.js" highlight></code-mkp>
  <p>Than you can use it anywhere in your application:</p>
  <code-mkp src="./code-reference/icons/icons-usage.html" highlight></code-mkp>
  <p>
    And this is how it looks in UI:
    <icon-mkp icon="home"></icon-mkp>
    <icon-mkp icon="menu"></icon-mkp>
    <icon-mkp icon="arrow"></icon-mkp>
  </p>
  <p>Most of the Holiday Elements support icons by default:</p>
  <code-mkp src="./code-reference/icons/icons-elements.html" highlight></code-mkp>
  <h2>Where can I get icons?</h2>
  <p>
    There are many of open source icon libraries provided by community.
    For instance, <a href="https://materialdesignicons.com/" target="_blank">Material Design Icons</a>.
  </p>
  <p>
    Besides, you can draw icon by yourself with the one of open source SVG editors, such as <a href="https://inkscape.org/" target="_blank">Inkscape</a>.
  </p>
  <info-css>
    Please note, that standard icon SVG-image size is 24X24 pixels, and your drawing should not contain any transforms.
    Finally, your icon will be resized by your CSS rules, by default it depends to font size.
  </info-css>
  <space-css max></space-css>
</column-mkp>
`;
IconsSection.is = 'icons-section';
