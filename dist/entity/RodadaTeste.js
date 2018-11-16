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
var BaseEntity_1 = require("./base/BaseEntity");
var typeorm_1 = require("typeorm");
var RodadaTesteStep_1 = require("./RodadaTesteStep");
var Projeto_1 = require("./Projeto");
var RodadaTeste = /** @class */ (function (_super) {
    __extends(RodadaTeste, _super);
    function RodadaTeste(projeto) {
        var _this = _super.call(this) || this;
        _this.projeto = projeto;
        _this.dataInicioExecucao = new Date();
        return _this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], RodadaTeste.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "data_inicio_execucao" }),
        __metadata("design:type", Date)
    ], RodadaTeste.prototype, "dataInicioExecucao", void 0);
    __decorate([
        typeorm_1.Column({ name: "data_fim_execucao" }),
        __metadata("design:type", Date)
    ], RodadaTeste.prototype, "dataFimExecucao", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Projeto_1.Projeto; }, function (projeto) { return projeto.cenarios; }),
        typeorm_1.JoinColumn({ name: "projeto_id" }),
        __metadata("design:type", Projeto_1.Projeto)
    ], RodadaTeste.prototype, "projeto", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return RodadaTesteStep_1.RodadaTesteStep; }, function (rodadaTesteStep) { return rodadaTesteStep.rodadaTeste; }),
        __metadata("design:type", RodadaTesteStep_1.RodadaTesteStep)
    ], RodadaTeste.prototype, "rodadaTesteStep", void 0);
    RodadaTeste = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [Projeto_1.Projeto])
    ], RodadaTeste);
    return RodadaTeste;
}(BaseEntity_1.BaseEntity));
exports.RodadaTeste = RodadaTeste;
