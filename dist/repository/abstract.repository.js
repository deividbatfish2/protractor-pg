"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var AbstractRepository = /** @class */ (function () {
    function AbstractRepository() {
        this.repository = typeorm_1.getRepository(T);
    }
    AbstractRepository.prototype.save = function (entidade) {
        return this.repository.save(entidade);
    };
    return AbstractRepository;
}());
exports.AbstractRepository = AbstractRepository;
