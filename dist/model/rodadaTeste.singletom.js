"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RodadaTesteSingleton = /** @class */ (function () {
    function RodadaTesteSingleton(rodadaTeste) {
        this._rodadaTeste = rodadaTeste;
    }
    RodadaTesteSingleton.getDefault = function () {
        return RodadaTesteSingleton._default._rodadaTeste;
    };
    Object.defineProperty(RodadaTesteSingleton, "default", {
        set: function (rodadaTeste) {
            if (!RodadaTesteSingleton._default) {
                RodadaTesteSingleton._default = new RodadaTesteSingleton(rodadaTeste);
            }
        },
        enumerable: true,
        configurable: true
    });
    return RodadaTesteSingleton;
}());
exports.RodadaTesteSingleton = RodadaTesteSingleton;
