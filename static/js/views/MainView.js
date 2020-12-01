import ResizeEvent from '../events/ResizeEvent.js';
import ApplicationController from '../controllers/ApplicationController.js';
import TrackingController from '../controllers/TrackingController.js';
import AssetsProxy from '../model/AssetsProxy.js';
import BaseController from '../controllers/BaseController.js';
import TickEvent from '../events/TickEvent.js';
import {RandomUtils} from '../utils/RandomUtils.js';
import {BaseView} from './BaseView.js';
import SessionProxy from '../model/SessionProxy.js';
import CopyProxy from '../model/CopyProxy.js';
import Model from '../model/Model.js';
import BookingDataModel from '../model/BookingDataModel.js';
import StoresProxy from '../model/StoresProxy.js';
import StoresSection from './StoresSection.js';
import InfoView from './InfoView.js';
import ScrollMananger from '../ScrollMananger.js';
import {BrowserUtils} from '../utils/BrowserUtils.js';
import CalendarView from './CalendarView.js';
import {TransformUtils} from '../utils/TransformUtils.js';
import TWEEN from '../vendor/tween.esm.js';

export class MainView extends BaseView {

    constructor(el) {
        super(el);
    }

    //---------------------------------------------------

    initialize() {

        this._initializeModels();
        this._initializeControllers();
        this._initializeViews();

        //initialize views
        this._setupWindow();

        //add globals for css
        var market = Model.RetrieveModel(SessionProxy.NAME).get('language');
        this.el.classList.add(market);

        var scrollExpander = document.querySelector('#js-scroll-expander');

        this._scrollManager = new ScrollMananger(scrollExpander, this.el);

        this._fixedHeaderOffset = 0;

        //to get the layouts started
        window.dispatchEvent(new Event('resize'));
    }


    /***
     * Update current sketch and smooth scroll
     * @param time
     */
    draw(time) {

        //update views here..
        new TickEvent(time).dispatchImmediate();

        TWEEN.update(time);

        BaseController.update();

        var invalidated = this._scrollManager.update();

        var offsetTop = this._scrollManager.offsetTop;
        var offsetMenu = this._fixedHeaderOffset;
        var top = -(Math.min(-offsetMenu, offsetTop) + offsetMenu);

        TransformUtils.Translate(this._header, {x: 0, y: top});
        TransformUtils.Translate(this._menu, {x: 0, y: top});

        //mobile only..
        if (this.windowWidth < 767) {
            this._header.style.opacity = 1 - Math.pow((this._scrollManager.offsetTop / -this._fixedHeaderOffset), 4);
        }
    }

    scrollToSection(section) {

        var offsetTop = section.el.offsetTop;
        //120 is nav + header height
        var navHeight = this.windowWidth < 767 ? 120 : 100;
        var scrollPos = offsetTop - navHeight;
        window.scrollTo(0, scrollPos);

    }

    //---------------------------------------------------


    _setupWindow() {

    }

    _onResize() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;

        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        this._scrollManager.onResize(this.windowWidth, this.windowHeight);

        var navHeight = this.windowWidth < 767 ? 60 : 100;
        this._fixedHeaderOffset = this._header.offsetHeight - navHeight;
        new ResizeEvent(this.windowWidth, this.windowHeight).dispatch();
    }

    _initializeControllers() {
        this._applicationController = new ApplicationController(this);
        new TrackingController();
    }

    _initializeModels() {

        new AssetsProxy();

        new CopyProxy(Object.assign({}, __SAPPER__.preloaded[0].combined));

        new SessionProxy(Object.assign({}, __SAPPER__.preloaded[0].session));

        new StoresProxy(Object.assign({}, __SAPPER__.preloaded[0].stores));

        //new BookingDataModel();
    }

    _initializeViews() {
        //template example
        var section = this.el.querySelector('#js-home');
        this._storesSection = new StoresSection(section);
        this._applicationController.registerSection(this._storesSection);

    }
}
