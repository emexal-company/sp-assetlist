import { Base } from '@spectrum/sp-base';
export declare class Assetlist extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    src: string;
    label: string;
    icon: string;
    selected: boolean;
    branch: boolean;
    ChevronRight: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-assetlist': Assetlist;
    }
}
