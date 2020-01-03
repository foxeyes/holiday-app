const TEMPLATE = /*html*/ `
<div class="menu">
  ${ITEMS.map(item => `<menu-item icon="${item.icon}">${item.text}</menu-item>`).join('')}
</div>
`;
