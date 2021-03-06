"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Cenario_1 = require("./Cenario");
var BaseEntity_1 = require("./base/BaseEntity");
var RodadaTesteStep_1 = require("./RodadaTesteStep");
var Step = /** @class */ (function (_super) {
    __extends(Step, _super);
    function Step(descricao, cenario) {
        var _this = _super.call(this) || this;
        _this.descricao = descricao;
        _this.cenario = cenario;
        return _this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Step.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Step.prototype, "descricao", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Cenario_1.Cenario; }, function (cenario) { return cenario.steps; }),
        typeorm_1.JoinColumn({ name: "cenario_id" }),
        __metadata("design:type", Cenario_1.Cenario)
    ], Step.prototype, "cenario", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return RodadaTesteStep_1.RodadaTesteStep; }, function (rodadaTesteStep) { return rodadaTesteStep.step; }),
        __metadata("design:type", RodadaTesteStep_1.RodadaTesteStep)
    ], Step.prototype, "rodadaTesteStep", void 0);
    Step = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [String, Cenario_1.Cenario])
    ], Step);
    return Step;
}(BaseEntity_1.BaseEntity));
exports.Step = Step;
