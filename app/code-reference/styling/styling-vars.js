// Native CSS Custom Properties:
const TEMPLATE = /*html*/ `
<style>
  :host {
    color: var(--color, #fff);
    padding: var(--padding, #00f);
  }
</style>
`;

// ES6 advantages:
function computedOpacity() {
  return Math.random();
}

export const CSS = {
  DISPLAY_MIX: 'display: flex; justify-content: center;',
  COLORS_MIX: 'color: #fff; background-color: #0f0;',
  SHADOW_VAL: `0 0 10px rgba(0, 0, 0, ${computedOpacity()});`,
};

const TEMPLATE2 = /*html*/ `
<style>
  :host {
    ${CSS.DISPLAY_MIX}
    ${CSS.COLORS_MIX}
    box-shadow: ${CSS.SHADOW_VAL}
  }
</style>
`;
