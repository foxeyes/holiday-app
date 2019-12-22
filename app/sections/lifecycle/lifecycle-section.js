import { HdElement } from '../../holiday/core/hd-element.js';

export class LifecycleSection extends HdElement {

}

LifecycleSection.template = /*html*/ `
<style>
  :host {
    display: block;
    padding: var(--gap-max);
  }
  .logo-img {
    height: 120px;
    width: 120px;
  }
</style>
<column-mkp>
  <image-mkp class="logo-img" src="assets/img/logo_compact.svg"></image-mkp>
  <h2>Lifecycle example:</h2>
  <gist-embed id="9142e5c0bb140fed041a6f2194a84898"></gist-embed> 
</column-mkp>  

`;
LifecycleSection.is = 'lifecycle-section';