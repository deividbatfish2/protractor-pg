"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var BaseRepository = /** @class */ (function () {
    function BaseRepository(entity) {
        this.entity = entity;
        this.repository = typeorm_1.getRepository(entity.constructor);
    }
    BaseRepository.prototype.save = function () {
        return this.repository.save(this.entity);
    };
    BaseRepository.prototype.findOne = function (condition) {
        return this.repository.findOne(condition);
    };
    return BaseRepository;
}());
exports.BaseRepository = BaseRepository;
