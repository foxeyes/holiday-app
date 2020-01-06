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
  display: block;
  width: 100%;
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
info-css {
  display: block;
  font-style: italic;
  padding: var(--gap-max);
  border: 1px dashed currentColor;
}
code-mkp[terminal] {
  color: var(--color-terminal);
}

code-mkp[custom] {
  color: var(--custom-color);
}

ul {
  list-style-type: none;
}
ul > li {
  margin-bottom: 6px;
  transition: 0.2s;
}
ul > li::before {
  content: "> ";
}

a {
  color: currentColor;
  font-weight: bold;
  text-shadow: 0 4px 6px rgba(0, 255, 200, 0.4);
}

space-css {
  display: block;
  height: var(--gap-mid, 10px);
  width: var(--gap-mid, 10px);
  min-height: var(--gap-mid, 10px);
  min-width: var(--gap-mid, 10px);
}
space-css[min] {
  height: var(--gap-min, 2px);
  width: var(--gap-min, 2px);
  min-height: var(--gap-min, 2px);
  min-width: var(--gap-min, 2px);
}
space-css[mid] {
  height: var(--gap-mid, 10px);
  width: var(--gap-mid, 10px);
  min-height: var(--gap-mid, 10px);
  min-width: var(--gap-mid, 10px);
}
space-css[max] {
  height: var(--gap-max, 20px);
  width: var(--gap-max, 20px);
  min-height: var(--gap-max, 20px);
  min-width: var(--gap-max, 20px);
}
space-css[ui] {
  height: var(--tap-zone-size, 32px);
  width: var(--tap-zone-size, 32px);
  min-height: var(--tap-zone-size, 32px);
  min-width: var(--tap-zone-size, 32px);
}
space-css[inline] {
  display: inline-block;
}
`;
