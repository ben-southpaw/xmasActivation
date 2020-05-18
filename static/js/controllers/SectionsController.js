import BaseController from './BaseController.js';
import {ON_STATE_CHANGED} from '../events/EventTypes.js';

export default class SectionsController extends BaseController {

    static GetInstance() {
        return SectionsController._instance;
    }

    constructor() {
        super();
        SectionsController._instance = this;
        this._sectionsMap = {};
        this.listenTo(ON_STATE_CHANGED, this._onStateChanged);
    }

    registerSection(section, state) {
        this._sectionsMap[state] = section;
    }

    getSectionByName(name) {
        return Object.values(this._sectionsMap).find(section.name == name);
    }

    getStateByName(name) {
        for (var state in this._sectionsMap) {
            if (this._sectionsMap[state].name == name)
                return state;
        }
    }

    //--------------------------------------

    _onStateChanged(e) {

        if (this._currentSection)
            this._currentSection.hide();
        if(this._sectionsMap[e.state]){
        this._currentSection = this._sectionsMap[e.state];
        this._currentSection.show();
        }else{
            console.warn("No Section For State : " + e.state);
        }
    }
}

SectionsController._instance = null;