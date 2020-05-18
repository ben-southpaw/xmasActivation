import Model from './Model.js';

export default class CopyProxy extends Model{

    constructor(data) {
        super(CopyProxy.NAME);

        this._data = data;
    }

    get(str){
        return this._data[str];
    }

}

CopyProxy.NAME = "CopyProxy";