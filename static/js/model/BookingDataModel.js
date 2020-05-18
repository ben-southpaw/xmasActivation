import SessionProxy from './SessionProxy.js';
import Model from './Model.js';
import BookingUpdateEvent from '../events/BookingUpdateEvent.js';
import StoresProxy from './StoresProxy.js';

export default class BookingDataModel extends Model {

    constructor() {
        super(BookingDataModel.NAME);

        var language = Model.RetrieveModel(SessionProxy.NAME).get('language');
        var market = Model.RetrieveModel(SessionProxy.NAME).get('market');
        this.data = {
            language, market,
            city: '',
            store: null,
            'first-name': '',
            'last-name': '',
            'email': '',
            //'birth-date': '',
            terms: false,
            newsletter: false,
            contactguid: ''
        }
    }

    setContactGUID(id) {
        var invalidated = this.set('contactguid', id);
        if (invalidated)
            this._invalidate();
    }

    setStoreByID(id) {
        var store = Model.RetrieveModel(StoresProxy.NAME).getStoreById(id);
        var isStoreGood = false;
        if (store) {
            isStoreGood = true;
            this.data['store'] = store;
            this._invalidate();
        }

        return isStoreGood;
    }

    setCity(city) {

        //validate?
        var invalidate = this.set('city', city);

        if (invalidate)
            this._invalidate()

        return invalidate;
    }

    setInfo(data) {

        var invalidate = this.set('first-name', data['first-name']);
        invalidate = this.set('last-name', data['last-name']) || invalidate;
        invalidate = this.set('email', data.email) || invalidate;
        //invalidate = this.set('birth-date', data['birth-date']) || invalidate;
        //invalidate = this.set('terms', data.terms) || invalidate;
        invalidate = this.set('newsletter', data.newsletter) || invalidate;

        if (invalidate)
            this._invalidate();

        return invalidate;
    }


    set(str, value) {

        var isGood = false;

        if (this.data[str] !== value) {
            //todo validate here?
            isGood = true;
            this.data[str] = value
        }

        return isGood;
    }

    getContactGUID() {
        return this._requestContactGUID();
    }

    getState() {
        //check city
        var isCityGood = !!this.data['city'];

        if (!isCityGood)
            this.data['store'] = null;

        var isStoreGood = !!this.data['store'];

        if (!isStoreGood) {
            this.data['first-name'] == '';
            this.data['last-name'] == '';
            this.data.dob = null;
            this.data.cta = false;
        }

        var isInfoGood = !!(this.data['first-name'] && this.data['last-name'] && this.data['email']);
        //isInfoGood = isInfoGood && this.data['birth-date'] !== 'invalid';

        var isSubmitGood = !!this.data['contactguid'];

        return {isCityGood, isStoreGood, isInfoGood, isSubmitGood};
    }

    //---------------------------------------------

    _invalidate() {
        var state = this.getState();
        new BookingUpdateEvent(state).dispatch();
    }

    _requestContactGUID() {

        function status(response) {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        }

        function json(response) {
            return response.json()
        }

        if (Model.RetrieveModel(SessionProxy.NAME).get('environment') !== 'production')
            console.log(this.data);


        return fetch('./api/contactguid.json',
            {
                'method': 'post',
                'headers': {
                    'Content-type': 'application/json'
                },
                'body': JSON.stringify(this.data)
            })
            .then(status)
            .then(json);

    }
}

BookingDataModel.NAME = 'BookingDataModel';