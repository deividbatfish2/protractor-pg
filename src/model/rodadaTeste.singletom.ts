import { RodadaTeste } from "../entity/RodadaTeste";

export class RodadaTesteSingleton {
    public _rodadaTeste: RodadaTeste;

    private constructor(rodadaTeste: RodadaTeste){
        this._rodadaTeste = rodadaTeste;
    }

    private static _default: RodadaTesteSingleton;

    static getDefault(): RodadaTeste {
        return RodadaTesteSingleton._default._rodadaTeste;
    }

    static set default(rodadaTeste: RodadaTeste) {
        if (!RodadaTesteSingleton._default) {
            RodadaTesteSingleton._default = new RodadaTesteSingleton(rodadaTeste);
        }
    }

}