import Model from './Model.js';
import { LoadingUtils } from '../utils/LoadingUtils.js';
import manifest from '../manifest.js';

export default class AssetsProxy extends Model {

    constructor() {
        super(AssetsProxy.NAME);
        this._assets = {};
        this._promises = {};

        this._manifest = this._getManifest();
        //this._loadInitial();
    }

    getAssetById(id) {
        return new Promise(resolve => {
            if (this._assets[id])
                resolve(this._assets[id]);
            else if (this._promises[id])
                this._promises[id].then(resolve);
            else
                this._loadAsset(this._manifest.find(asset=>asset.id == id)).then(resolve)

        });
    }

    getAssetsById(arr) {
        var promises = arr.map(id => this.getAssetById(id));
        return Promise.all(promises);
    }

    preloadAssetsByIds(arr){
        var assets = this._manifest.filter(asset => {
            var contains = false;
            arr.forEach(token => {
                contains = contains || asset.id.indexOf(token) !== -1
            });
            return contains;
        });
        assets.map(asset => this._loadAsset(asset));
    }

    //-----------------------------

    _loadInitial() {
        this._manifest.forEach(asset => this._loadAsset(asset));
    }

    _loadAsset(asset) {
        this._promises[asset.id] = new Promise((resolve, reject) => {
            var url = asset.src;//this._seeRetinaUrl(asset.src);
            //console.log(url);
            return LoadingUtils.LoadImage(url).then(img => {
                this._assets[asset.id] = {
                    img: img,
                    id: asset.id,
                    width: img.naturalWidth,
                    height: img.naturalHeight
                };
                resolve(this._assets[asset.id]);
            }).catch(e => {
                console.log(e.message);
                reject('Img Not Loaded : ' + asset.id);
            })
        });
        return this._promises[asset.id];
    }

    _seeRetinaUrl(url){
        var postFix = "@2x.";//window.devicePixelRatio <= 1 ? "@1x." : "@2x.";
        var index = url.lastIndexOf('.');
        var ext = url.split('.').pop();
        url = url.substring(0, index) + postFix + ext;
        return url;
    }
    /***
     * Merge assets from manifest.js and _stories.js
     * @private
     */
    _getManifest() {

        this._manifest = manifest.looks;

        return this._manifest;

    }

}

AssetsProxy.NAME = 'AssetsProxy';