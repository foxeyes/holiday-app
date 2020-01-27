import {SPACE_CSS} from '../holiday/elements/exports.js';

export const COMMON_STYLES = /*css*/ `
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
.head-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  object-fit: contain;
  object-position: center center;
}
.logo-img {
  height: 120px;
  width: 120px;
}
heading-layout-css {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
heading-layout-css > * {
  margin-right: var(--gap-mid);
}
info-css {
  display: block;
  position: relative;
  font-style: italic;
  padding: var(--gap-max);
  color: var(--info-color);
  border-left: 1px dashed currentColor;
  text-shadow: 0 0px 13px currentColor;
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.2);
}
info-css::before {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  background-color: #000;
  pointer-events: none;
  opacity: 0.2;
}
code-mkp[terminal] {
  color: var(--color-terminal);
}

code-mkp[custom] {
  color: var(--custom-color);
}

ul {
  list-style-type: none;
  padding: var(--gap-max);
}
ul > li {
  margin-bottom: 8px;
}
ul > li::before {
  content: ">";
  color: var(--hl-color);
  text-shadow: 0 0px 13px currentColor;
  margin-right: var(--gap-mid);
}

a {
  color: currentColor;
  font-weight: bold;
  text-shadow: 0 4px 6px rgba(0, 255, 200, 0.4);
}

${SPACE_CSS}
`;
