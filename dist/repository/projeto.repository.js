"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Projeto_1 = require("../entity/Projeto");
var typeorm_1 = require("typeorm");
var ProjetoRepository = /** @class */ (function () {
    function ProjetoRepository() {
        this.repository = typeorm_1.getRepository(Projeto_1.Projeto);
    }
    ProjetoRepository.prototype.save = function (projeto) {
        return this.repository.save(projeto);
    };
    ProjetoRepository.prototype.findOne = function (projeto) {
        return this.repository.findOne({ nome: projeto.nome });
    };
    return ProjetoRepository;
}());
exports.ProjetoRepository = ProjetoRepository;
