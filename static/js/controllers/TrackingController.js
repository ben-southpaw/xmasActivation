import BaseController from './BaseController.js';
import {BrowserUtils} from '../utils/BrowserUtils.js';
import SessionProxy from '../model/SessionProxy.js';
import {ON_CONTACTGUID, ON_FORM_UPDATE, ON_SCROLL, ON_SCROLL_STOP, ON_STORE_SELECTED} from '../events/EventTypes.js';
import Model from '../model/Model.js';
import StoresProxy from '../model/StoresProxy.js';

/***
 * UTAG Tracking
 *
 * Note 'UTAG' is initialized in the sapper code as we've no linkage to the cookie notice here
 */
export default class TrackingMediator extends BaseController {

    constructor(props) {
        super(props);

        this.listenTo(ON_SCROLL, this._onScroll);
        this.listenTo(ON_SCROLL_STOP, this._onScrollStop);
        this.listenTo(ON_STORE_SELECTED, this._onStoreSelected);
        this.listenTo(ON_FORM_UPDATE, this._onFormUpdate);
        this.listenTo(ON_CONTACTGUID, this._onFormSubmit);

        this._eventQueue = [];
        this._isScrolling = false;

    }

    sendEvent(obj) {

        if (window.utag && (!this._isScrolling || BrowserUtils.isMobile())) {

            //purge queue
            this._sendEvents();

            if(Model.RetrieveModel(SessionProxy.NAME).get('environment') !== 'production')
                console.log(obj);

            window.utag.link(obj);

        } else {
            //todo is this safe?...
            this._eventQueue.push(obj);
        }
    }


    //-----------------------------------------------

    _sendEvents() {
        if (window.utag) {
            if (this._eventQueue.length) {
                this._eventQueue.forEach(evt => {

                    if(Model.RetrieveModel(SessionProxy.NAME).get('environment') !== 'production')
                        console.log(evt);

                    window.utag.link(evt);

                });
                this._eventQueue = [];
            }
        }
    }

    _onFormSubmit(){
        this.sendEvent({
            event_name: 'Bookiung',
            event_action: 'User_Details_Complete',
            event_category: 'General',
            event_label: 'Timeslot_Select',
        });
    }

    _onFormUpdate(e){

        var input = e.input
        var lableMap = {
            'first-name' : "First_Name",
            'last-name' : "Last_Name",
            'email' : 'Email',
            'dob' : 'DOB',
            'mob' : 'DOB',
            'yob' : 'DOB',
        }

        if(lableMap[input]){
            this.sendEvent({
                event_name: 'Personal Information',
                event_action: 'Add_User_Details',
                event_category: 'General',
                event_label: lableMap[input],
            });
        }
    }
    _onStoreSelected(e) {
        var id = e.storeID;

        var store = Model.RetrieveModel(StoresProxy.NAME).getStoreById(id);

        this.sendEvent({
            event_name: 'Store Selection',
            event_action: 'Select_Store',
            event_category: 'General',
            event_label: store.id,
        });

        var typeMap = {
            'tommy_jeans': 'Tommy_Jeans',
            'tommy_mall': 'Tommy_Outlet',
            'tommy_flagship': 'Tommy_Flagship'
        };

        this.sendEvent({
            event_name: 'Store Selection',
            event_action: 'Select_Type',
            event_category: 'General',
            event_label: typeMap[store.type],
        });


    }

    _onScrollStop() {
        this._isScrolling = false;
        this._sendEvents();
    }

    _onScroll(evt) {

        if (!BrowserUtils.isMobile())
            this._isScrolling = true;

        this._seeScrollPercentages(evt.ratio);
    }

    _seeScrollPercentages(ratio) {

        //  console.log(ratio);
        if (Number.isNaN(ratio) || ratio == Infinity)
            return;

        ratio = Math.ceil(ratio * 4) * 25 + '%';
        if (ratio != this._currentScrollPercentage) {

            this.sendEvent({
                event_name: 'scroll',
                event_action: 'scroll',
                event_category: 'engagement',
                event_label: ratio,
            });
            this._currentScrollPercentage = ratio;
        }

    }
}