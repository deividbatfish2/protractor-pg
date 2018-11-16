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
var Projeto_1 = require("./Projeto");
var Step_1 = require("./Step");
var typeorm_1 = require("typeorm");
var BaseEntity_1 = require("./base/BaseEntity");
var Cenario = /** @class */ (function (_super) {
    __extends(Cenario, _super);
    function Cenario(descricao, projeto) {
        var _this = _super.call(this) || this;
        _this.descricao = descricao;
        _this.projeto = projeto;
        return _this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Cenario.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Cenario.prototype, "descricao", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Projeto_1.Projeto; }, function (projeto) { return projeto.cenarios; }),
        typeorm_1.JoinColumn({ name: "projeto_id" }),
        __metadata("design:type", Projeto_1.Projeto)
    ], Cenario.prototype, "projeto", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Step_1.Step; }, function (step) { return step.cenario; }),
        __metadata("design:type", Array)
    ], Cenario.prototype, "steps", void 0);
    Cenario = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [String, Projeto_1.Projeto])
    ], Cenario);
    return Cenario;
}(BaseEntity_1.BaseEntity));
exports.Cenario = Cenario;
