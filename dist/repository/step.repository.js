"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Step_1 = require("../entity/Step");
var StepRepository = /** @class */ (function () {
    function StepRepository() {
        this.repository = typeorm_1.getRepository(Step_1.Step);
    }
    StepRepository.prototype.save = function (step) {
        return this.repository.save(step);
    };
    return StepRepository;
}());
exports.StepRepository = StepRepository;
