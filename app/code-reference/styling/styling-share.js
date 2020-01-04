// 1: Native CSS imports (asynchronous):
const TEMPLATE = /*html*/ `
<style>
  @import './css/common/styles.css';
</style>
`;

// 2: Link option (asynchronous):
const TEMPLATE2 = /*html*/ `
<link rel="stylesheet" href="./css/common/styles.css">
`;

// 3: ES6 string interpolation approach (synchronous):
export const COMMON_CSS = /*css*/ `
:host {
  display: block;
}
`;

const TEMPLATE3 = /*html*/ `
<style>
  ${COMMON_CSS}
</style>
`;
