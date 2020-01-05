import {Holiday} from '../../holiday/core/holiday.js';

export class ShowcaseCom extends Holiday {
  constructor() {
    super();
    this.state = {
      tagName: '',
      demoUrl: '',
      on: {
        goToDemo: () => {
          let win = window.open();
          // @ts-ignore
          win.location = this.state.demoUrl;
        },
        goToGithub: () => {
          let win = window.open();
          win.location = this['github-link'];
        },
      }
    };
    this.defineAccessor('tag-name', (name) => {
      this.setStateProperty({
        tagName: name,
      });
    });
    this.defineAccessor('demo-url', (url) => {
      this.setStateProperty({
        demoUrl: url,
      });
    });
    this.defineAccessor('github-link', () => {
      return;
    });
  }
}

ShowcaseCom.template = /*html*/ `
<style>
  :host {
    position: relative;
    display: grid;
    grid-gap: var(--gap-mid);
    padding: var(--gap-max);
    margin-bottom: var(--gap-max);
  }
  iframe {
    display: block;
    width: 100%;
    min-height: 320px;
    border-radius: var(--gap-mid);
    background-color: #fff;
  }
  .shade {
    position: absolute;
    background-color: currentColor;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.1;
    pointer-events: none;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--gap-mid);
  }
  .tag-name {
    font-size: 24px;
  }
</style>
<div class="shade"></div>
<div class="head">
  <div class="tag-name">&lt;<span bind="textContent: tagName"></span>&gt;</div>
  <grid-mkp columns="min-content min-content" gap="var(--gap-mid)">
    <button-ui outline icon="cursor" bind="onclick: on.goToDemo">Demo</button-ui>
    <button-ui outline icon="github" bind="onclick: on.goToGithub">Code</button-ui>
  </grid-mkp>
</div>
<div class="demo">
  <iframe frameborder="0" bind="src: demoUrl"></iframe>
</div>
`;
ShowcaseCom.logicAttributes = [
  'tag-name',
  'demo-url',
  'github-link',
];
ShowcaseCom.is = 'showcase-com';
