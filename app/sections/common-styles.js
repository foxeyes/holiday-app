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
  height: 300px;
  object-fit: contain;
  object-position: center center;
  margin-bottom: 40px;
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
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
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
  text-shadow: 0 4px 6px rgba(0, 255, 200, 0.2);
}

${SPACE_CSS}
`;
