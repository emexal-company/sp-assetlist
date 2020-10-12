import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './assetlist.styles';
import standardTemplate from './assetlist.template';
let Assetlist = class Assetlist extends Base {
    constructor() {
        super(...arguments);
        this.src = '';
        this.label = '';
        this.icon = '';
        this.selected = false;
        this.branch = false;
        this.ChevronRight = false;
    }
    render() {
        return standardTemplate.call(this);
    }
};
Assetlist.componentStyles = [labelStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Assetlist.prototype, "src", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Assetlist.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Assetlist.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Assetlist.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Assetlist.prototype, "branch", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Assetlist.prototype, "ChevronRight", void 0);
Assetlist = __decorate([
    customElement('sp-assetlist')
], Assetlist);
export { Assetlist };
//# sourceMappingURL=assetlist.component.js.map