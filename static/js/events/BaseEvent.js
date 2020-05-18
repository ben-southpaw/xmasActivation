import BaseController from '../controllers/BaseController.js';

export default class BaseEvent{

    constructor(eventType) {
        this.eventType = eventType;
    }

    dispatchImmediate(){
        BaseController.dispatchImmediate(this);
    }

    dispatch(){
        BaseController.dispatch(this);
    }

}