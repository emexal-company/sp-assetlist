import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './assetlist.styles';
import standardTemplate from './assetlist.template';

@customElement('sp-assetlist')
export class Assetlist extends Base {
  public static componentStyles = [labelStyles];

  @property({ type: String }) public src: string = '';
  @property({ type: String }) public label: string = '';
  @property({ type: String }) public icon: string = '';
  @property({ type: Boolean }) public selected: boolean = false;
  @property({ type: Boolean }) public branch: boolean = false;
  @property({ type: Boolean }) public ChevronRight: boolean = false;
  

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-assetlist': Assetlist;
  }
}
