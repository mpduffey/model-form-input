"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ModelFormInput = (function () {
    function ModelFormInput() {
        this.valueChange = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ModelFormInput.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ModelFormInput.prototype, "value", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ModelFormInput.prototype, "valueChange", void 0);
    ModelFormInput = __decorate([
        core_1.Component({
            selector: 'model-form-input',
            template: "\n\t\t<div class=\"form-group\">\n\t\t\t<label>{{field.custom.label || field.name}}:</label>\n\t\t\t<input type=\"text\" class=\"form-control flex-item\" placeholder=\"{{field.custom.label || field.name}}\" name=\"field.name\" [(ngModel)]=\"value\">\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], ModelFormInput);
    return ModelFormInput;
}());
exports.ModelFormInput = ModelFormInput;
//# sourceMappingURL=model-form-input.js.map