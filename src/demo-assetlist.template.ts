import { html } from 'lit-element';
import { DemoAssetlist } from './demo-assetlist.component';

import '@spectrum/sp-assetlist';
import '@spectrum/sp-container';


export default function template(this: DemoAssetlist) {
  return html`
  <sp-container>
  <sp-rule medium label="Standard"></sp-rule>
      <sp-demo width="300">
      <pre><sp-assetlist src="https://opensource.adobe.com/spectrum-css/static/images/example-ava.jpg" label="Shantanu.jpg"></sp-assetlist></pre>
      </sp-demo>
      <sp-demo width="300">
      <pre><sp-assetlist label="Resource Allocation.csv" icon="FileCSV"></sp-assetlist></pre>
      </sp-demo>
      <sp-demo width="300">
      <pre><sp-assetlist selected branch icon="Folder" label="Frontend Projects" ChevronRight></sp-assetlist></pre>
      </sp-demo>
  </sp-container>
  `;
  
}
