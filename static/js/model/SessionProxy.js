import Model from './Model.js';

export default class SessionProxy extends Model{

    constructor(data) {
        super(SessionProxy.NAME);

        this._data = data;
    }

    get(str){
        return this._data[str];
    }

}

SessionProxy.NAME = "SessionProxy";