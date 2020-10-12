import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Assetlist } from './assetlist.component';
import '@spectrum/sp-button';
import '@spectrum/sp-icon';
import '@spectrum/sp-checkbox';

export default function standardTemplate(this: Assetlist) {
  const classes = {
    'is-branch': this.branch || this.selected,
    'is-selected': this.branch || this.selected
  };

return html`
<ul class="spectrum-AssetList">
  <li class="spectrum-AssetList-item is-selectable ${classMap(classes)}" tabindex="0">
    ${this.selected ? html` <sp-checkbox checked label=""></sp-checkbox>` : html` <sp-checkbox label=""></sp-checkbox>`}
    ${this.src ? html` <img src="${this.src}" class="spectrum-AssetList-itemThumbnail">` : ''}
    ${this.icon ? html` <sp-icon class="spectrum-Icon" size="S" name="${this.icon}"></sp-icon>` : ''}
    <span class="spectrum-AssetList-itemLabel">${this.label}</span>
    ${this.ChevronRight ? html`<sp-icon class="spectrum-Icon" size="S" name="ChevronRightMedium"></sp-icon>` : ''}
  </li>
</ul>
   `;
}
