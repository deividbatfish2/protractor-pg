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
var RodadaTeste_1 = require("./RodadaTeste");
var Projeto = /** @class */ (function (_super) {
    __extends(Projeto, _super);
    function Projeto(nome, descricao) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        _this.descricao = descricao;
        return _this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Projeto.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Projeto.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Projeto.prototype, "descricao", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Cenario_1.Cenario; }, function (cenario) { return cenario.projeto; }),
        __metadata("design:type", Array)
    ], Projeto.prototype, "cenarios", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return RodadaTeste_1.RodadaTeste; }, function (rodadaDeTeste) { return rodadaDeTeste.projeto; }),
        __metadata("design:type", Array)
    ], Projeto.prototype, "rodadasDeTeste", void 0);
    Projeto = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [String, String])
    ], Projeto);
    return Projeto;
}(BaseEntity_1.BaseEntity));
exports.Projeto = Projeto;
