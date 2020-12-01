import Model from './Model.js';

export default class StoresProxy extends Model {

    constructor(data) {
        super(StoresProxy.NAME);
        this.data = data;
    }

    getStoresByCity(city) {
        return this.data.stores.filter(store => store.city == city);
    }

    getStoreById(id) {
        return this.data.stores.find(store => store.id == id);
    }
}
StoresProxy.NAME = 'StoresProxy';