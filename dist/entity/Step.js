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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Cenario_1 = require("./Cenario");
var Step = /** @class */ (function () {
    function Step() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Step.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Step.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Step.prototype, "resultado", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Cenario_1.Cenario; }, function (cenario) { return cenario.steps; }),
        __metadata("design:type", Cenario_1.Cenario)
    ], Step.prototype, "cenario", void 0);
    Step = __decorate([
        typeorm_1.Entity()
    ], Step);
    return Step;
}());
exports.Step = Step;
