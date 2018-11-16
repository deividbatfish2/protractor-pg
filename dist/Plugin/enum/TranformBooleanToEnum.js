"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResultadoStep_enum_1 = require("./ResultadoStep.enum");
var TransformBooleanToEnum = /** @class */ (function () {
    function TransformBooleanToEnum() {
    }
    TransformBooleanToEnum.transform = function (boleano) {
        return boleano ? ResultadoStep_enum_1.ResultadoStep.PASSOU : ResultadoStep_enum_1.ResultadoStep.FALHOU;
    };
    return TransformBooleanToEnum;
}());
exports.TransformBooleanToEnum = TransformBooleanToEnum;
