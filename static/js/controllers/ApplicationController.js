import BaseController from './BaseController.js';
import {
    ON_BOOKING_UPDATE,
    ON_CITY_SELECTED, ON_CONTACTGUID,
    ON_FORM_SUBMIT,
    ON_FORM_UPDATE, ON_IFRAME_LOADED,
    ON_STORE_SELECTED
} from '../events/EventTypes.js';
import Model from '../model/Model.js';
import StoresProxy from '../model/StoresProxy.js';
import BookingDataModel from '../model/BookingDataModel.js';
import ContactGUIDEvent from '../events/ContactGUIDEvent.js';

export default class ApplicationController extends BaseController {

    constructor(mainView) {
        super();

        this._mainView = mainView;
        
        this.listenTo(ON_BOOKING_UPDATE, this._onBookingUpdate);
        this.listenTo(ON_CITY_SELECTED, this._onCitySelected);
        this.listenTo(ON_STORE_SELECTED, this._onStoreSelected);
        this.listenTo(ON_FORM_SUBMIT, this._onFormSubmit);
        this.listenTo(ON_FORM_UPDATE, this._onFormUpdate);
        this.listenTo(ON_CONTACTGUID, this._onContactGUID);
        this.listenTo(ON_IFRAME_LOADED, this._onIFrameLoaded);

        this.sections = {};
    }

    registerSection(section) {
        this.sections[section.name] = section;
    }

    //-----------------------------------

    _onIFrameLoaded(){
       this._mainView.scrollToSection(this.sections['calendar'])
    }

    _onCitySelected(e) {

        if (Model.RetrieveModel(BookingDataModel.NAME).setCity(e.city)) {

            this._mainView.scrollToSection(this.sections['stores'])

            var stores = Model.RetrieveModel(StoresProxy.NAME).getStoresByCity(e.city);
            this.sections['stores'].setStores(stores);
        }
    }

    _onStoreSelected(e) {

        if (Model.RetrieveModel(BookingDataModel.NAME).setStoreByID(e.storeID)) {
            this._mainView.scrollToSection(this.sections['info'])
        }
    }

    _onFormUpdate(e) {

        var data = {};
        for (var name in e.data) {
            data[name] = e.data[name].value;
        }

        if (Model.RetrieveModel(BookingDataModel.NAME).setInfo(data)) {

        }
    }

    _onContactGUID(e){

        var bookingProxy = Model.RetrieveModel(BookingDataModel.NAME);
        bookingProxy.setContactGUID(e.id);
        var store = bookingProxy.data.store.id;
        var url = `https://pub.s6.exacttarget.com/vytil1qmyqy?guid=${e.id}&store_id=${store}`;
        this.sections['calendar'].setUrl(url);

        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 1);
    }

    _onFormSubmit(e) {

        //show loader
        this.sections['calendar'].show();

        var bookingProxy = Model.RetrieveModel(BookingDataModel.NAME);
        var state = bookingProxy.getState();
        if (state.isInfoGood && state.isStoreGood && state.isCityGood) {
            bookingProxy.getContactGUID().then((response) => {
                //todo show iframe..
                console.log(response);

                if (response.Result.ContactGuid) {
                    new ContactGUIDEvent(response.Result.ContactGuid).dispatch();
                }


            }).catch(e => {
                //do nothing
            })
        }
    }

    /**
     * Called whenever the BookingModel is invalidated (user input)
     *
     * @param e
     * @private
     */
    _onBookingUpdate(e) {
        this._seeState(e);
        this._seeSections(e);
    }

    /**
     * Update global CSS based on collected data
     * @param e
     * @private
     */
    _seeState(e) {

        var container = document.querySelector('#sapper');
        if (e.isCityGood) {
            container.classList.add('store')
        } else
            container.classList.remove('store');

        if (e.isStoreGood)
            container.classList.add('info');
        else
            container.classList.remove('info');

        if (e.isInfoGood) {
            container.classList.add('submit');
        } else
            container.classList.remove('submit');

        if (e.isSubmitGood) {
            container.classList.add('calendar')
        } else {
            container.classList.remove('calendar')
        }

    }

    _seeSections(e) {

        if (!e.isInfoGood) {
            if (!e.isCityGood) {
                this.sections['stores'].resetStores();
            }
        } else {

        }
    }


}
