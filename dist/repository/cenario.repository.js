"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Cenario_1 = require("../entity/Cenario");
var CenarioRepository = /** @class */ (function () {
    function CenarioRepository() {
        this.repository = typeorm_1.getRepository(Cenario_1.Cenario);
    }
    CenarioRepository.prototype.save = function (cenario) {
        return this.repository.save(cenario);
    };
    CenarioRepository.prototype.findOne = function (cenario) {
        return this.repository.findOne({ descricao: cenario.descricao });
    };
    return CenarioRepository;
}());
exports.CenarioRepository = CenarioRepository;
