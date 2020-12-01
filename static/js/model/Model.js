import StateChangedEvent from '../events/StateChangedEvent.js';

export default class Model {

    static get ApplicationState(){
        return Model._State;
    }

    static set ApplicationState(val){
        if(Model._State != val){
            Model._State = val;

            new StateChangedEvent(val).dispatch();
        }
    }
    constructor(id) {
        Model._RegisterModel(this, id)
    }

    static RetrieveModel(id){
        return Model._models[id];
    }

    static _RegisterModel(model, id){
        Model._models[id] = model;
    }
}

Model._State = "";
Model._models = {};