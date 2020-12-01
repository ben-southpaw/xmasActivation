(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  var ON_SCROLL = 'onScroll';
  var ON_SCROLL_STOP = 'onScrollStop';
  var ON_STATE_CHANGED = 'stateChanged';
  var ON_TICK = 'onTick';
  var ON_RESIZE = 'resize';
  var ON_BOOKING_UPDATE = 'onBookingUpdate';
  var ON_CITY_SELECTED = 'onCitySelected';
  var ON_STORE_SELECTED = 'onStoreSelected';
  var ON_FORM_SUBMIT = 'onFormSubmit';
  var ON_FORM_UPDATE = 'onFormUpdate';
  var ON_CONTACTGUID = 'onContactGUID';
  var ON_IFRAME_LOADED = 'onIFrameLoaded';

  var BaseController = /*#__PURE__*/function () {
    function BaseController() {
      _classCallCheck(this, BaseController);

      BaseController._controllers.push(this);

      this.eventHandlers = [];
    }

    _createClass(BaseController, [{
      key: "listenTo",
      value: function listenTo(type, handler) {
        if (!this.eventHandlers[type]) {
          this.eventHandlers[type] = [];
        }

        this.eventHandlers[type].push(handler);
      }
    }], [{
      key: "dispatch",
      value: function dispatch(event) {
        setTimeout(function () {
          BaseController.eventQueue.push(event);
        }, 1);
      }
    }, {
      key: "dispatchImmediate",
      value: function dispatchImmediate(event) {
        var _this2 = this;

        BaseController._controllers.forEach(function (controller) {
          var _this3 = this;

          _newArrowCheck(this, _this2);

          if (controller.eventHandlers[event.eventType]) {
            controller.eventHandlers[event.eventType].forEach(function (handler) {
              _newArrowCheck(this, _this3);

              handler.call(controller, event); //(event);
            }.bind(this));
          }
        }.bind(this));
      }
    }, {
      key: "update",
      value: function update() {
        var _this4 = this;

        try {
          var _this = this;

          if (BaseController.eventQueue) {
            BaseController.eventQueue.forEach(function (event) {
              var _this5 = this;

              _newArrowCheck(this, _this4);

              BaseController._controllers.forEach(function (controller) {
                var _this6 = this;

                _newArrowCheck(this, _this5);

                if (controller.eventHandlers[event.eventType]) {
                  controller.eventHandlers[event.eventType].forEach(function (handler) {
                    _newArrowCheck(this, _this6);

                    handler.call(controller, event); //(event);
                  }.bind(this));
                }
              }.bind(this));
            }.bind(this));
          }
        } catch (e) {
          console.error(e);
          console.log(e.stack);
        }

        BaseController.eventQueue = [];
      }
    }]);

    return BaseController;
  }();
  BaseController._controllers = [];

  var BaseEvent = /*#__PURE__*/function () {
    function BaseEvent(eventType) {
      _classCallCheck(this, BaseEvent);

      this.eventType = eventType;
    }

    _createClass(BaseEvent, [{
      key: "dispatchImmediate",
      value: function dispatchImmediate() {
        BaseController.dispatchImmediate(this);
      }
    }, {
      key: "dispatch",
      value: function dispatch() {
        BaseController.dispatch(this);
      }
    }]);

    return BaseEvent;
  }();

  var ResizeEvent = /*#__PURE__*/function (_BaseEvent) {
    _inherits(ResizeEvent, _BaseEvent);

    var _super = _createSuper(ResizeEvent);

    function ResizeEvent(width, height) {
      var _this;

      _classCallCheck(this, ResizeEvent);

      _this = _super.call(this, ON_RESIZE);
      _this.width = width;
      _this.height = height;
      return _this;
    }

    return ResizeEvent;
  }(BaseEvent);

  var StateChangedEvent = /*#__PURE__*/function (_BaseEvent) {
    _inherits(StateChangedEvent, _BaseEvent);

    var _super = _createSuper(StateChangedEvent);

    function StateChangedEvent(state) {
      var _this;

      _classCallCheck(this, StateChangedEvent);

      _this = _super.call(this, ON_STATE_CHANGED);
      _this.state = state;
      return _this;
    }

    return StateChangedEvent;
  }(BaseEvent);

  var Model = /*#__PURE__*/function () {
    _createClass(Model, null, [{
      key: "ApplicationState",
      get: function get() {
        return Model._State;
      },
      set: function set(val) {
        if (Model._State != val) {
          Model._State = val;
          new StateChangedEvent(val).dispatch();
        }
      }
    }]);

    function Model(id) {
      _classCallCheck(this, Model);

      Model._RegisterModel(this, id);
    }

    _createClass(Model, null, [{
      key: "RetrieveModel",
      value: function RetrieveModel(id) {
        return Model._models[id];
      }
    }, {
      key: "_RegisterModel",
      value: function _RegisterModel(model, id) {
        Model._models[id] = model;
      }
    }]);

    return Model;
  }();
  Model._State = "";
  Model._models = {};

  var StoresProxy = /*#__PURE__*/function (_Model) {
    _inherits(StoresProxy, _Model);

    var _super = _createSuper(StoresProxy);

    function StoresProxy(data) {
      var _this;

      _classCallCheck(this, StoresProxy);

      _this = _super.call(this, StoresProxy.NAME);
      _this.data = data;
      return _this;
    }

    _createClass(StoresProxy, [{
      key: "getStoresByCity",
      value: function getStoresByCity(city) {
        var _this2 = this;

        return this.data.stores.filter(function (store) {
          _newArrowCheck(this, _this2);

          return store.city == city;
        }.bind(this));
      }
    }, {
      key: "getStoreById",
      value: function getStoreById(id) {
        var _this3 = this;

        return this.data.stores.find(function (store) {
          _newArrowCheck(this, _this3);

          return store.id == id;
        }.bind(this));
      }
    }]);

    return StoresProxy;
  }(Model);
  StoresProxy.NAME = 'StoresProxy';

  var SessionProxy = /*#__PURE__*/function (_Model) {
    _inherits(SessionProxy, _Model);

    var _super = _createSuper(SessionProxy);

    function SessionProxy(data) {
      var _this;

      _classCallCheck(this, SessionProxy);

      _this = _super.call(this, SessionProxy.NAME);
      _this._data = data;
      return _this;
    }

    _createClass(SessionProxy, [{
      key: "get",
      value: function get(str) {
        return this._data[str];
      }
    }]);

    return SessionProxy;
  }(Model);
  SessionProxy.NAME = "SessionProxy";

  var BookingUpdateEvent = /*#__PURE__*/function (_BaseEvent) {
    _inherits(BookingUpdateEvent, _BaseEvent);

    var _super = _createSuper(BookingUpdateEvent);

    function BookingUpdateEvent(state) {
      var _this;

      _classCallCheck(this, BookingUpdateEvent);

      _this = _super.call(this, ON_BOOKING_UPDATE);
      var isCityGood = state.isCityGood,
          isInfoGood = state.isInfoGood,
          isStoreGood = state.isStoreGood,
          isSubmitGood = state.isSubmitGood;
      _this.isCityGood = isCityGood;
      _this.isStoreGood = isStoreGood;
      _this.isInfoGood = isInfoGood;
      _this.isSubmitGood = isSubmitGood;
      return _this;
    }

    return BookingUpdateEvent;
  }(BaseEvent);

  var BookingDataModel = /*#__PURE__*/function (_Model) {
    _inherits(BookingDataModel, _Model);

    var _super = _createSuper(BookingDataModel);

    function BookingDataModel() {
      var _this;

      _classCallCheck(this, BookingDataModel);

      _this = _super.call(this, BookingDataModel.NAME);
      var language = Model.RetrieveModel(SessionProxy.NAME).get('language');
      var market = Model.RetrieveModel(SessionProxy.NAME).get('market');
      _this.data = {
        language: language,
        market: market,
        city: '',
        store: null,
        'first-name': '',
        'last-name': '',
        'email': '',
        //'birth-date': '',
        terms: false,
        newsletter: false,
        contactguid: ''
      };
      return _this;
    }

    _createClass(BookingDataModel, [{
      key: "setContactGUID",
      value: function setContactGUID(id) {
        var invalidated = this.set('contactguid', id);
        if (invalidated) this._invalidate();
      }
    }, {
      key: "setStoreByID",
      value: function setStoreByID(id) {
        var store = Model.RetrieveModel(StoresProxy.NAME).getStoreById(id);
        var isStoreGood = false;

        if (store) {
          isStoreGood = true;
          this.data['store'] = store;

          this._invalidate();
        }

        return isStoreGood;
      }
    }, {
      key: "setCity",
      value: function setCity(city) {
        //validate?
        var invalidate = this.set('city', city);
        if (invalidate) this._invalidate();
        return invalidate;
      }
    }, {
      key: "setInfo",
      value: function setInfo(data) {
        var invalidate = this.set('first-name', data['first-name']);
        invalidate = this.set('last-name', data['last-name']) || invalidate;
        invalidate = this.set('email', data.email) || invalidate; //invalidate = this.set('birth-date', data['birth-date']) || invalidate;
        //invalidate = this.set('terms', data.terms) || invalidate;

        invalidate = this.set('newsletter', data.newsletter) || invalidate;
        if (invalidate) this._invalidate();
        return invalidate;
      }
    }, {
      key: "set",
      value: function set(str, value) {
        var isGood = false;

        if (this.data[str] !== value) {
          //todo validate here?
          isGood = true;
          this.data[str] = value;
        }

        return isGood;
      }
    }, {
      key: "getContactGUID",
      value: function getContactGUID() {
        return this._requestContactGUID();
      }
    }, {
      key: "getState",
      value: function getState() {
        //check city
        var isCityGood = !!this.data['city'];
        if (!isCityGood) this.data['store'] = null;
        var isStoreGood = !!this.data['store'];

        if (!isStoreGood) {
          this.data['first-name'] == '';
          this.data['last-name'] == '';
          this.data.dob = null;
          this.data.cta = false;
        }

        var isInfoGood = !!(this.data['first-name'] && this.data['last-name'] && this.data['email']); //isInfoGood = isInfoGood && this.data['birth-date'] !== 'invalid';

        var isSubmitGood = !!this.data['contactguid'];
        return {
          isCityGood: isCityGood,
          isStoreGood: isStoreGood,
          isInfoGood: isInfoGood,
          isSubmitGood: isSubmitGood
        };
      } //---------------------------------------------

    }, {
      key: "_invalidate",
      value: function _invalidate() {
        var state = this.getState();
        new BookingUpdateEvent(state).dispatch();
      }
    }, {
      key: "_requestContactGUID",
      value: function _requestContactGUID() {
        function status(response) {
          if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
          } else {
            return Promise.reject(new Error(response.statusText));
          }
        }

        function json(response) {
          return response.json();
        }

        if (Model.RetrieveModel(SessionProxy.NAME).get('environment') !== 'production') console.log(this.data);
        return fetch('./api/contactguid.json', {
          'method': 'post',
          'headers': {
            'Content-type': 'application/json'
          },
          'body': JSON.stringify(this.data)
        }).then(status).then(json);
      }
    }]);

    return BookingDataModel;
  }(Model);
  BookingDataModel.NAME = 'BookingDataModel';

  var ContactGUIDEvent = /*#__PURE__*/function (_BaseEvent) {
    _inherits(ContactGUIDEvent, _BaseEvent);

    var _super = _createSuper(ContactGUIDEvent);

    function ContactGUIDEvent(id) {
      var _this;

      _classCallCheck(this, ContactGUIDEvent);

      _this = _super.call(this, ON_CONTACTGUID);
      _this.id = id;
      return _this;
    }

    return ContactGUIDEvent;
  }(BaseEvent);

  var ApplicationController = /*#__PURE__*/function (_BaseController) {
    _inherits(ApplicationController, _BaseController);

    var _super = _createSuper(ApplicationController);

    function ApplicationController(mainView) {
      var _this;

      _classCallCheck(this, ApplicationController);

      _this = _super.call(this);
      _this._mainView = mainView;

      _this.listenTo(ON_BOOKING_UPDATE, _this._onBookingUpdate);

      _this.listenTo(ON_CITY_SELECTED, _this._onCitySelected);

      _this.listenTo(ON_STORE_SELECTED, _this._onStoreSelected);

      _this.listenTo(ON_FORM_SUBMIT, _this._onFormSubmit);

      _this.listenTo(ON_FORM_UPDATE, _this._onFormUpdate);

      _this.listenTo(ON_CONTACTGUID, _this._onContactGUID);

      _this.listenTo(ON_IFRAME_LOADED, _this._onIFrameLoaded);

      _this.sections = {};
      return _this;
    }

    _createClass(ApplicationController, [{
      key: "registerSection",
      value: function registerSection(section) {
        this.sections[section.name] = section;
      } //-----------------------------------

    }, {
      key: "_onIFrameLoaded",
      value: function _onIFrameLoaded() {
        this._mainView.scrollToSection(this.sections['calendar']);
      }
    }, {
      key: "_onCitySelected",
      value: function _onCitySelected(e) {
        if (Model.RetrieveModel(BookingDataModel.NAME).setCity(e.city)) {
          this._mainView.scrollToSection(this.sections['stores']);

          var stores = Model.RetrieveModel(StoresProxy.NAME).getStoresByCity(e.city);
          this.sections['stores'].setStores(stores);
        }
      }
    }, {
      key: "_onStoreSelected",
      value: function _onStoreSelected(e) {
        if (Model.RetrieveModel(BookingDataModel.NAME).setStoreByID(e.storeID)) {
          this._mainView.scrollToSection(this.sections['info']);
        }
      }
    }, {
      key: "_onFormUpdate",
      value: function _onFormUpdate(e) {
        var data = {};

        for (var name in e.data) {
          data[name] = e.data[name].value;
        }

        if (Model.RetrieveModel(BookingDataModel.NAME).setInfo(data)) ;
      }
    }, {
      key: "_onContactGUID",
      value: function _onContactGUID(e) {
        var _this2 = this;

        var bookingProxy = Model.RetrieveModel(BookingDataModel.NAME);
        bookingProxy.setContactGUID(e.id);
        var store = bookingProxy.data.store.id;
        var url = "https://pub.s6.exacttarget.com/vytil1qmyqy?guid=".concat(e.id, "&store_id=").concat(store);
        this.sections['calendar'].setUrl(url);
        setTimeout(function () {
          _newArrowCheck(this, _this2);

          window.dispatchEvent(new Event('resize'));
        }.bind(this), 1);
      }
    }, {
      key: "_onFormSubmit",
      value: function _onFormSubmit(e) {
        var _this3 = this;

        //show loader
        this.sections['calendar'].show();
        var bookingProxy = Model.RetrieveModel(BookingDataModel.NAME);
        var state = bookingProxy.getState();

        if (state.isInfoGood && state.isStoreGood && state.isCityGood) {
          bookingProxy.getContactGUID().then(function (response) {
            _newArrowCheck(this, _this3);

            //todo show iframe..
            console.log(response);

            if (response.Result.ContactGuid) {
              new ContactGUIDEvent(response.Result.ContactGuid).dispatch();
            }
          }.bind(this))["catch"](function (e) {//do nothing

            _newArrowCheck(this, _this3);
          }.bind(this));
        }
      }
      /**
       * Called whenever the BookingModel is invalidated (user input)
       *
       * @param e
       * @private
       */

    }, {
      key: "_onBookingUpdate",
      value: function _onBookingUpdate(e) {
        this._seeState(e);

        this._seeSections(e);
      }
      /**
       * Update global CSS based on collected data
       * @param e
       * @private
       */

    }, {
      key: "_seeState",
      value: function _seeState(e) {
        var container = document.querySelector('#sapper');

        if (e.isCityGood) {
          container.classList.add('store');
        } else container.classList.remove('store');

        if (e.isStoreGood) container.classList.add('info');else container.classList.remove('info');

        if (e.isInfoGood) {
          container.classList.add('submit');
        } else container.classList.remove('submit');

        if (e.isSubmitGood) {
          container.classList.add('calendar');
        } else {
          container.classList.remove('calendar');
        }
      }
    }, {
      key: "_seeSections",
      value: function _seeSections(e) {
        if (!e.isInfoGood) {
          if (!e.isCityGood) {
            this.sections['stores'].resetStores();
          }
        }
      }
    }]);

    return ApplicationController;
  }(BaseController);

  var IS_MOBILE;
  var BrowserUtils = {
    isMobile: function isMobile() {
      if (IS_MOBILE === undefined) {
        var check = false;

        (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);

        IS_MOBILE = check;
      }

      return IS_MOBILE;
    },
    isTouchDevice: function isTouchDevice() {
      return !!('ontouchstart' in window // works on most browsers
      || navigator.maxTouchPoints);
    },
    isIOS: function isIOS() {
      return /iphone|ipod|ipad/.test(window.navigator.userAgent.toLowerCase());
    },
    isIOSiPad: function isIOSiPad() {
      return /ipad/.test(window.navigator.userAgent.toLowerCase());
    },
    isIE: function isIE() {
      return /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);
    }
  };

  /***
   * UTAG Tracking
   *
   * Note 'UTAG' is initialized in the sapper code as we've no linkage to the cookie notice here
   */

  var TrackingMediator = /*#__PURE__*/function (_BaseController) {
    _inherits(TrackingMediator, _BaseController);

    var _super = _createSuper(TrackingMediator);

    function TrackingMediator(props) {
      var _this;

      _classCallCheck(this, TrackingMediator);

      _this = _super.call(this, props);

      _this.listenTo(ON_SCROLL, _this._onScroll);

      _this.listenTo(ON_SCROLL_STOP, _this._onScrollStop);

      _this.listenTo(ON_STORE_SELECTED, _this._onStoreSelected);

      _this.listenTo(ON_FORM_UPDATE, _this._onFormUpdate);

      _this.listenTo(ON_CONTACTGUID, _this._onFormSubmit);

      _this._eventQueue = [];
      _this._isScrolling = false;
      return _this;
    }

    _createClass(TrackingMediator, [{
      key: "sendEvent",
      value: function sendEvent(obj) {
        if (window.utag && (!this._isScrolling || BrowserUtils.isMobile())) {
          //purge queue
          this._sendEvents();

          if (Model.RetrieveModel(SessionProxy.NAME).get('environment') !== 'production') console.log(obj);
          window.utag.link(obj);
        } else {
          //todo is this safe?...
          this._eventQueue.push(obj);
        }
      } //-----------------------------------------------

    }, {
      key: "_sendEvents",
      value: function _sendEvents() {
        var _this2 = this;

        if (window.utag) {
          if (this._eventQueue.length) {
            this._eventQueue.forEach(function (evt) {
              _newArrowCheck(this, _this2);

              if (Model.RetrieveModel(SessionProxy.NAME).get('environment') !== 'production') console.log(evt);
              window.utag.link(evt);
            }.bind(this));

            this._eventQueue = [];
          }
        }
      }
    }, {
      key: "_onFormSubmit",
      value: function _onFormSubmit() {
        this.sendEvent({
          event_name: 'Bookiung',
          event_action: 'User_Details_Complete',
          event_category: 'General',
          event_label: 'Timeslot_Select'
        });
      }
    }, {
      key: "_onFormUpdate",
      value: function _onFormUpdate(e) {
        var input = e.input;
        var lableMap = {
          'first-name': "First_Name",
          'last-name': "Last_Name",
          'email': 'Email',
          'dob': 'DOB',
          'mob': 'DOB',
          'yob': 'DOB'
        };

        if (lableMap[input]) {
          this.sendEvent({
            event_name: 'Personal Information',
            event_action: 'Add_User_Details',
            event_category: 'General',
            event_label: lableMap[input]
          });
        }
      }
    }, {
      key: "_onStoreSelected",
      value: function _onStoreSelected(e) {
        var id = e.storeID;
        var store = Model.RetrieveModel(StoresProxy.NAME).getStoreById(id);
        this.sendEvent({
          event_name: 'Store Selection',
          event_action: 'Select_Store',
          event_category: 'General',
          event_label: store.id
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
          event_label: typeMap[store.type]
        });
      }
    }, {
      key: "_onScrollStop",
      value: function _onScrollStop() {
        this._isScrolling = false;

        this._sendEvents();
      }
    }, {
      key: "_onScroll",
      value: function _onScroll(evt) {
        if (!BrowserUtils.isMobile()) this._isScrolling = true;

        this._seeScrollPercentages(evt.ratio);
      }
    }, {
      key: "_seeScrollPercentages",
      value: function _seeScrollPercentages(ratio) {
        //  console.log(ratio);
        if (Number.isNaN(ratio) || ratio == Infinity) return;
        ratio = Math.ceil(ratio * 4) * 25 + '%';

        if (ratio != this._currentScrollPercentage) {
          this.sendEvent({
            event_name: 'scroll',
            event_action: 'scroll',
            event_category: 'engagement',
            event_label: ratio
          });
          this._currentScrollPercentage = ratio;
        }
      }
    }]);

    return TrackingMediator;
  }(BaseController);

  var LoadingUtils = {
    LoadAJAX: function LoadAJAX(url) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _newArrowCheck(this, _this);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            resolve(xmlhttp.responseText);
          }
        };

        xmlhttp.open('GET', url, true);
        xmlhttp.send();
      }.bind(this));
    },
    LoadSVG: function LoadSVG(url) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _newArrowCheck(this, _this2);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            resolve(xmlhttp.responseXML);
          }
        };

        xmlhttp.open('GET', url, true);
        xmlhttp.send();
      }.bind(this));
    },
    LoadJSON: function LoadJSON(url) {
      var _this3 = this;

      return new Promise(function (resolve) {
        var _this4 = this;

        _newArrowCheck(this, _this3);

        LoadingUtils.LoadAJAX(url).then(function (data) {
          _newArrowCheck(this, _this4);

          try {
            var data = JSON.parse(data);
          } catch (err) {
            reject(err.message + ' in ' + data);
            return;
          }

          resolve(data);
        }.bind(this));
      }.bind(this));
    },
    LoadImages: function LoadImages(imgs) {
      var _this5 = this;

      var promises = [];
      imgs.forEach(function (src) {
        _newArrowCheck(this, _this5);

        promises.push(this.LoadImage(src));
      }.bind(this));
      return Promise.all(promises);
    },
    LoadImage: function LoadImage(src) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        _newArrowCheck(this, _this6);

        if (!src) {
          reject('LoadingUtils : img null');
        } else {
          var img = new Image();

          img.onload = function () {
            img.onload = null;
            resolve(img);
          };

          img.onerror = function (e) {
            reject(e.message);
          };

          img.src = src;
        }
      }.bind(this));
    },
    LoadShader: function LoadShader(src) {
      return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function (e) {
          resolve(e.currentTarget.responseText);
        });
        xhr.open('GET', src);
        xhr.send();
      });
    },
    LoadShaders: function LoadShaders(src) {
      var _this7 = this;

      return new Promise(function (resolve) {
        var _this8 = this;

        _newArrowCheck(this, _this7);

        var promises = [];

        for (var i = 0; i < src.length; i++) {
          promises.push(this.LoadShader(src[i]));
        }

        Promise.all(promises).then(function (shaders) {
          _newArrowCheck(this, _this8);

          //TODO add mobile detection..

          /*if(Modernizr.touchevents) {
              for (var i = 0; i < shaders.length; i++) {
                  shaders[i] = "#define MOBILE\n" + shaders[i];
              }
          }*/
          resolve(shaders);
        }.bind(this));
      }.bind(this));
    },
    LoadClass: function LoadClass(url, Class) {
      var _this9 = this;

      return new Promise(function (resolve) {
        _newArrowCheck(this, _this9);

        eval('import SketchView from "' + url + '"');
        var node = document.createElement('script');
        node.setAttribute('type', 'module');
        node.setAttribute('language', 'JavaScript');
        node.charset = 'utf-8';
        node.setAttribute('src', url);
        node.addEventListener('load', function (evt) {
          if (evt.type === 'load' || readyRegExp.tommy((evt.currentTarget || evt.srcElement).readyState)) {
            node = evt.currentTarget || evt.srcElement; //Pull out the name of the module and the context.

            resolve(node);
          }
        }); // Now add this new element to the head tag

        document.getElementsByTagName('head')[0].appendChild(node);
      }.bind(this));
    }
  };

  var manifest = {
    images: []
  };

  var AssetsProxy = /*#__PURE__*/function (_Model) {
    _inherits(AssetsProxy, _Model);

    var _super = _createSuper(AssetsProxy);

    function AssetsProxy() {
      var _this;

      _classCallCheck(this, AssetsProxy);

      _this = _super.call(this, AssetsProxy.NAME);
      _this._assets = {};
      _this._promises = {};
      _this._manifest = _this._getManifest(); //this._loadInitial();

      return _this;
    }

    _createClass(AssetsProxy, [{
      key: "getAssetById",
      value: function getAssetById(id) {
        var _this2 = this;

        return new Promise(function (resolve) {
          var _this3 = this;

          _newArrowCheck(this, _this2);

          if (this._assets[id]) resolve(this._assets[id]);else if (this._promises[id]) this._promises[id].then(resolve);else this._loadAsset(this._manifest.find(function (asset) {
            _newArrowCheck(this, _this3);

            return asset.id == id;
          }.bind(this))).then(resolve);
        }.bind(this));
      }
    }, {
      key: "getAssetsById",
      value: function getAssetsById(arr) {
        var _this4 = this;

        var promises = arr.map(function (id) {
          _newArrowCheck(this, _this4);

          return this.getAssetById(id);
        }.bind(this));
        return Promise.all(promises);
      }
    }, {
      key: "preloadAssetsByIds",
      value: function preloadAssetsByIds(arr) {
        var _this5 = this;

        var assets = this._manifest.filter(function (asset) {
          var _this6 = this;

          _newArrowCheck(this, _this5);

          var contains = false;
          arr.forEach(function (token) {
            _newArrowCheck(this, _this6);

            contains = contains || asset.id.indexOf(token) !== -1;
          }.bind(this));
          return contains;
        }.bind(this));

        assets.map(function (asset) {
          _newArrowCheck(this, _this5);

          return this._loadAsset(asset);
        }.bind(this));
      } //-----------------------------

    }, {
      key: "_loadInitial",
      value: function _loadInitial() {
        var _this7 = this;

        this._manifest.forEach(function (asset) {
          _newArrowCheck(this, _this7);

          return this._loadAsset(asset);
        }.bind(this));
      }
    }, {
      key: "_loadAsset",
      value: function _loadAsset(asset) {
        var _this8 = this;

        this._promises[asset.id] = new Promise(function (resolve, reject) {
          var _this9 = this;

          _newArrowCheck(this, _this8);

          var url = asset.src; //this._seeRetinaUrl(asset.src);
          //console.log(url);

          return LoadingUtils.LoadImage(url).then(function (img) {
            _newArrowCheck(this, _this9);

            this._assets[asset.id] = {
              img: img,
              id: asset.id,
              width: img.naturalWidth,
              height: img.naturalHeight
            };
            resolve(this._assets[asset.id]);
          }.bind(this))["catch"](function (e) {
            _newArrowCheck(this, _this9);

            console.log(e.message);
            reject('Img Not Loaded : ' + asset.id);
          }.bind(this));
        }.bind(this));
        return this._promises[asset.id];
      }
    }, {
      key: "_seeRetinaUrl",
      value: function _seeRetinaUrl(url) {
        var postFix = "@2x."; //window.devicePixelRatio <= 1 ? "@1x." : "@2x.";

        var index = url.lastIndexOf('.');
        var ext = url.split('.').pop();
        url = url.substring(0, index) + postFix + ext;
        return url;
      }
      /***
       * Merge assets from manifest.js and _stories.js
       * @private
       */

    }, {
      key: "_getManifest",
      value: function _getManifest() {
        this._manifest = manifest.looks;
        return this._manifest;
      }
    }]);

    return AssetsProxy;
  }(Model);
  AssetsProxy.NAME = 'AssetsProxy';

  var TickEvent = /*#__PURE__*/function (_BaseEvent) {
    _inherits(TickEvent, _BaseEvent);

    var _super = _createSuper(TickEvent);

    function TickEvent(time) {
      var _this;

      _classCallCheck(this, TickEvent);

      _this = _super.call(this, ON_TICK);
      _this.time = time;
      return _this;
    }

    return TickEvent;
  }(BaseEvent);

  var _this = undefined;

  var RandomUtils = {
    debounce: function debounce(func, wait, immediate) {
      _newArrowCheck(this, _this);

      var timeout;
      return function () {
        var context = this,
            args = arguments;

        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }.bind(undefined)
  };

  var BaseView = /*#__PURE__*/function () {
    function BaseView(el, className) {
      _classCallCheck(this, BaseView);

      this.el = el || document.createElement('div');
      this.name = className;
    }

    _createClass(BaseView, [{
      key: "onResize",
      value: function onResize(width, height) {}
    }]);

    return BaseView;
  }();

  var CopyProxy = /*#__PURE__*/function (_Model) {
    _inherits(CopyProxy, _Model);

    var _super = _createSuper(CopyProxy);

    function CopyProxy(data) {
      var _this;

      _classCallCheck(this, CopyProxy);

      _this = _super.call(this, CopyProxy.NAME);
      _this._data = data;
      return _this;
    }

    _createClass(CopyProxy, [{
      key: "get",
      value: function get(str) {
        return this._data[str];
      }
    }]);

    return CopyProxy;
  }(Model);
  CopyProxy.NAME = "CopyProxy";

  var CitySelectedEvent = /*#__PURE__*/function (_BaseEvent) {
    _inherits(CitySelectedEvent, _BaseEvent);

    var _super = _createSuper(CitySelectedEvent);

    function CitySelectedEvent(city) {
      var _this;

      _classCallCheck(this, CitySelectedEvent);

      _this = _super.call(this, ON_CITY_SELECTED);
      _this.city = city;
      return _this;
    }

    return CitySelectedEvent;
  }(BaseEvent);

  var StoreSelectedEvent = /*#__PURE__*/function (_BaseEvent) {
    _inherits(StoreSelectedEvent, _BaseEvent);

    var _super = _createSuper(StoreSelectedEvent);

    function StoreSelectedEvent(store) {
      var _this;

      _classCallCheck(this, StoreSelectedEvent);

      _this = _super.call(this, ON_STORE_SELECTED);
      _this.storeID = store;
      return _this;
    }

    return StoreSelectedEvent;
  }(BaseEvent);

  var version = '18.4.2';
  /**
   * Tween.js - Licensed under the MIT license
   * https://github.com/tweenjs/tween.js
   * ----------------------------------------------
   *
   * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
   * Thank you all, you're awesome!
   */

  var _Group = function _Group() {
    this._tweens = {};
    this._tweensAddedDuringUpdate = {};
  };

  _Group.prototype = {
    getAll: function getAll() {
      return Object.keys(this._tweens).map(function (tweenId) {
        return this._tweens[tweenId];
      }.bind(this));
    },
    removeAll: function removeAll() {
      this._tweens = {};
    },
    add: function add(tween) {
      this._tweens[tween.getId()] = tween;
      this._tweensAddedDuringUpdate[tween.getId()] = tween;
    },
    remove: function remove(tween) {
      delete this._tweens[tween.getId()];
      delete this._tweensAddedDuringUpdate[tween.getId()];
    },
    update: function update(time, preserve) {
      var tweenIds = Object.keys(this._tweens);

      if (tweenIds.length === 0) {
        return false;
      }

      time = time !== undefined ? time : TWEEN.now(); // Tweens are updated in "batches". If you add a new tween during an
      // update, then the new tween will be updated in the next batch.
      // If you remove a tween during an update, it may or may not be updated.
      // However, if the removed tween was added during the current batch,
      // then it will not be updated.

      while (tweenIds.length > 0) {
        this._tweensAddedDuringUpdate = {};

        for (var i = 0; i < tweenIds.length; i++) {
          var tween = this._tweens[tweenIds[i]];

          if (tween && tween.update(time) === false) {
            tween._isPlaying = false;

            if (!preserve) {
              delete this._tweens[tweenIds[i]];
            }
          }
        }

        tweenIds = Object.keys(this._tweensAddedDuringUpdate);
      }

      return true;
    }
  };
  var TWEEN = new _Group();
  TWEEN.Group = _Group;
  TWEEN._nextId = 0;

  TWEEN.nextId = function () {
    return TWEEN._nextId++;
  }; // Include a performance.now polyfill.
  // In node.js, use process.hrtime.


  if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
    TWEEN.now = function () {
      var time = process.hrtime(); // Convert [seconds, nanoseconds] to milliseconds.

      return time[0] * 1000 + time[1] / 1000000;
    };
  } // In a browser, use self.performance.now if it is available.
  else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
      // This must be bound, because directly assigning this function
      // leads to an invocation exception in Chrome.
      TWEEN.now = self.performance.now.bind(self.performance);
    } // Use Date.now if it is available.
    else if (Date.now !== undefined) {
        TWEEN.now = Date.now;
      } // Otherwise, use 'new Date().getTime()'.
      else {
          TWEEN.now = function () {
            return new Date().getTime();
          };
        }

  TWEEN.Tween = function (object, group) {
    this._isPaused = false;
    this._pauseStart = null;
    this._object = object;
    this._valuesStart = {};
    this._valuesEnd = {};
    this._valuesStartRepeat = {};
    this._duration = 1000;
    this._repeat = 0;
    this._repeatDelayTime = undefined;
    this._yoyo = false;
    this._isPlaying = false;
    this._reversed = false;
    this._delayTime = 0;
    this._startTime = null;
    this._easingFunction = TWEEN.Easing.Linear.None;
    this._interpolationFunction = TWEEN.Interpolation.Linear;
    this._chainedTweens = [];
    this._onStartCallback = null;
    this._onStartCallbackFired = false;
    this._onUpdateCallback = null;
    this._onRepeatCallback = null;
    this._onCompleteCallback = null;
    this._onStopCallback = null;
    this._group = group || TWEEN;
    this._id = TWEEN.nextId();
  };

  TWEEN.Tween.prototype = {
    getId: function getId() {
      return this._id;
    },
    isPlaying: function isPlaying() {
      return this._isPlaying;
    },
    isPaused: function isPaused() {
      return this._isPaused;
    },
    to: function to(properties, duration) {
      this._valuesEnd = Object.create(properties);

      if (duration !== undefined) {
        this._duration = duration;
      }

      return this;
    },
    duration: function duration(d) {
      this._duration = d;
      return this;
    },
    start: function start(time) {
      this._group.add(this);

      this._isPlaying = true;
      this._isPaused = false;
      this._onStartCallbackFired = false;
      this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
      this._startTime += this._delayTime;

      for (var property in this._valuesEnd) {
        // Check if an Array was provided as property value
        if (this._valuesEnd[property] instanceof Array) {
          if (this._valuesEnd[property].length === 0) {
            continue;
          } // Create a local copy of the Array with the start value at the front


          this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
        } // If `to()` specifies a property that doesn't exist in the source object,
        // we should not set that property in the object


        if (this._object[property] === undefined) {
          continue;
        } // Save the starting value, but only once.


        if (typeof this._valuesStart[property] === 'undefined') {
          this._valuesStart[property] = this._object[property];
        }

        if (this._valuesStart[property] instanceof Array === false) {
          this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
        }

        this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
      }

      return this;
    },
    stop: function stop() {
      if (!this._isPlaying) {
        return this;
      }

      this._group.remove(this);

      this._isPlaying = false;
      this._isPaused = false;

      if (this._onStopCallback !== null) {
        this._onStopCallback(this._object);
      }

      this.stopChainedTweens();
      return this;
    },
    end: function end() {
      this.update(Infinity);
      return this;
    },
    pause: function pause(time) {
      if (this._isPaused || !this._isPlaying) {
        return this;
      }

      this._isPaused = true;
      this._pauseStart = time === undefined ? TWEEN.now() : time;

      this._group.remove(this);

      return this;
    },
    resume: function resume(time) {
      if (!this._isPaused || !this._isPlaying) {
        return this;
      }

      this._isPaused = false;
      this._startTime += (time === undefined ? TWEEN.now() : time) - this._pauseStart;
      this._pauseStart = 0;

      this._group.add(this);

      return this;
    },
    stopChainedTweens: function stopChainedTweens() {
      for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
        this._chainedTweens[i].stop();
      }
    },
    group: function group(_group) {
      this._group = _group;
      return this;
    },
    delay: function delay(amount) {
      this._delayTime = amount;
      return this;
    },
    repeat: function repeat(times) {
      this._repeat = times;
      return this;
    },
    repeatDelay: function repeatDelay(amount) {
      this._repeatDelayTime = amount;
      return this;
    },
    yoyo: function yoyo(_yoyo) {
      this._yoyo = _yoyo;
      return this;
    },
    easing: function easing(easingFunction) {
      this._easingFunction = easingFunction;
      return this;
    },
    interpolation: function interpolation(interpolationFunction) {
      this._interpolationFunction = interpolationFunction;
      return this;
    },
    chain: function chain() {
      this._chainedTweens = arguments;
      return this;
    },
    onStart: function onStart(callback) {
      this._onStartCallback = callback;
      return this;
    },
    onUpdate: function onUpdate(callback) {
      this._onUpdateCallback = callback;
      return this;
    },
    onRepeat: function onRepeat(callback) {
      this._onRepeatCallback = callback;
      return this;
    },
    onComplete: function onComplete(callback) {
      this._onCompleteCallback = callback;
      return this;
    },
    onStop: function onStop(callback) {
      this._onStopCallback = callback;
      return this;
    },
    update: function update(time) {
      var property;
      var elapsed;
      var value;

      if (time < this._startTime) {
        return true;
      }

      if (this._onStartCallbackFired === false) {
        if (this._onStartCallback !== null) {
          this._onStartCallback(this._object);
        }

        this._onStartCallbackFired = true;
      }

      elapsed = (time - this._startTime) / this._duration;
      elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
      value = this._easingFunction(elapsed);

      for (property in this._valuesEnd) {
        // Don't update properties that do not exist in the source object
        if (this._valuesStart[property] === undefined) {
          continue;
        }

        var start = this._valuesStart[property] || 0;
        var end = this._valuesEnd[property];

        if (end instanceof Array) {
          this._object[property] = this._interpolationFunction(end, value);
        } else {
          // Parses relative end values with start as base (e.g.: +10, -3)
          if (typeof end === 'string') {
            if (end.charAt(0) === '+' || end.charAt(0) === '-') {
              end = start + parseFloat(end);
            } else {
              end = parseFloat(end);
            }
          } // Protect against non numeric properties.


          if (typeof end === 'number') {
            this._object[property] = start + (end - start) * value;
          }
        }
      }

      if (this._onUpdateCallback !== null) {
        this._onUpdateCallback(this._object, elapsed);
      }

      if (elapsed === 1) {
        if (this._repeat > 0) {
          if (isFinite(this._repeat)) {
            this._repeat--;
          } // Reassign starting values, restart by making startTime = now


          for (property in this._valuesStartRepeat) {
            if (typeof this._valuesEnd[property] === 'string') {
              this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
            }

            if (this._yoyo) {
              var tmp = this._valuesStartRepeat[property];
              this._valuesStartRepeat[property] = this._valuesEnd[property];
              this._valuesEnd[property] = tmp;
            }

            this._valuesStart[property] = this._valuesStartRepeat[property];
          }

          if (this._yoyo) {
            this._reversed = !this._reversed;
          }

          if (this._repeatDelayTime !== undefined) {
            this._startTime = time + this._repeatDelayTime;
          } else {
            this._startTime = time + this._delayTime;
          }

          if (this._onRepeatCallback !== null) {
            this._onRepeatCallback(this._object);
          }

          return true;
        } else {
          if (this._onCompleteCallback !== null) {
            this._onCompleteCallback(this._object);
          }

          for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            // Make the chained tweens start exactly at the time they should,
            // even if the `update()` method was called way past the duration of the tween
            this._chainedTweens[i].start(this._startTime + this._duration);
          }

          return false;
        }
      }

      return true;
    }
  };
  TWEEN.Easing = {
    Linear: {
      None: function None(k) {
        return k;
      }
    },
    Quadratic: {
      In: function In(k) {
        return k * k;
      },
      Out: function Out(k) {
        return k * (2 - k);
      },
      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k;
        }

        return -0.5 * (--k * (k - 2) - 1);
      }
    },
    Cubic: {
      In: function In(k) {
        return k * k * k;
      },
      Out: function Out(k) {
        return --k * k * k + 1;
      },
      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k;
        }

        return 0.5 * ((k -= 2) * k * k + 2);
      }
    },
    Quartic: {
      In: function In(k) {
        return k * k * k * k;
      },
      Out: function Out(k) {
        return 1 - --k * k * k * k;
      },
      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k * k;
        }

        return -0.5 * ((k -= 2) * k * k * k - 2);
      }
    },
    Quintic: {
      In: function In(k) {
        return k * k * k * k * k;
      },
      Out: function Out(k) {
        return --k * k * k * k * k + 1;
      },
      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return 0.5 * k * k * k * k * k;
        }

        return 0.5 * ((k -= 2) * k * k * k * k + 2);
      }
    },
    Sinusoidal: {
      In: function In(k) {
        return 1 - Math.cos(k * Math.PI / 2);
      },
      Out: function Out(k) {
        return Math.sin(k * Math.PI / 2);
      },
      InOut: function InOut(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }
    },
    Exponential: {
      In: function In(k) {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
      },
      Out: function Out(k) {
        return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
      },
      InOut: function InOut(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        if ((k *= 2) < 1) {
          return 0.5 * Math.pow(1024, k - 1);
        }

        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
      }
    },
    Circular: {
      In: function In(k) {
        return 1 - Math.sqrt(1 - k * k);
      },
      Out: function Out(k) {
        return Math.sqrt(1 - --k * k);
      },
      InOut: function InOut(k) {
        if ((k *= 2) < 1) {
          return -0.5 * (Math.sqrt(1 - k * k) - 1);
        }

        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
      }
    },
    Elastic: {
      In: function In(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
      },
      Out: function Out(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
      },
      InOut: function InOut(k) {
        if (k === 0) {
          return 0;
        }

        if (k === 1) {
          return 1;
        }

        k *= 2;

        if (k < 1) {
          return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        }

        return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
      }
    },
    Back: {
      In: function In(k) {
        var s = 1.70158;
        return k * k * ((s + 1) * k - s);
      },
      Out: function Out(k) {
        var s = 1.70158;
        return --k * k * ((s + 1) * k + s) + 1;
      },
      InOut: function InOut(k) {
        var s = 1.70158 * 1.525;

        if ((k *= 2) < 1) {
          return 0.5 * (k * k * ((s + 1) * k - s));
        }

        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
      }
    },
    Bounce: {
      In: function In(k) {
        return 1 - TWEEN.Easing.Bounce.Out(1 - k);
      },
      Out: function Out(k) {
        if (k < 1 / 2.75) {
          return 7.5625 * k * k;
        } else if (k < 2 / 2.75) {
          return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
        } else if (k < 2.5 / 2.75) {
          return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
        } else {
          return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
        }
      },
      InOut: function InOut(k) {
        if (k < 0.5) {
          return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
        }

        return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
      }
    }
  };
  TWEEN.Interpolation = {
    Linear: function Linear(v, k) {
      var m = v.length - 1;
      var f = m * k;
      var i = Math.floor(f);
      var fn = TWEEN.Interpolation.Utils.Linear;

      if (k < 0) {
        return fn(v[0], v[1], f);
      }

      if (k > 1) {
        return fn(v[m], v[m - 1], m - f);
      }

      return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function Bezier(v, k) {
      var b = 0;
      var n = v.length - 1;
      var pw = Math.pow;
      var bn = TWEEN.Interpolation.Utils.Bernstein;

      for (var i = 0; i <= n; i++) {
        b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
      }

      return b;
    },
    CatmullRom: function CatmullRom(v, k) {
      var m = v.length - 1;
      var f = m * k;
      var i = Math.floor(f);
      var fn = TWEEN.Interpolation.Utils.CatmullRom;

      if (v[0] === v[m]) {
        if (k < 0) {
          i = Math.floor(f = m * (1 + k));
        }

        return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
      } else {
        if (k < 0) {
          return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
        }

        if (k > 1) {
          return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
        }

        return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
      }
    },
    Utils: {
      Linear: function Linear(p0, p1, t) {
        return (p1 - p0) * t + p0;
      },
      Bernstein: function Bernstein(n, i) {
        var fc = TWEEN.Interpolation.Utils.Factorial;
        return fc(n) / fc(i) / fc(n - i);
      },
      Factorial: function () {
        var a = [1];
        return function (n) {
          var s = 1;

          if (a[n]) {
            return a[n];
          }

          for (var i = n; i > 1; i--) {
            s *= i;
          }

          a[n] = s;
          return s;
        };
      }(),
      CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
        var v0 = (p2 - p0) * 0.5;
        var v1 = (p3 - p1) * 0.5;
        var t2 = t * t;
        var t3 = t * t2;
        return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
      }
    }
  };
  TWEEN.version = version;

  var Sylvester = {
    version: '0.1.3',
    precision: 1e-6
  };

  function Matrix() {}

  Matrix.prototype = {
    // Returns element (i,j) of the matrix
    e: function e(i, j) {
      if (i < 1 || i > this.elements.length || j < 1 || j > this.elements[0].length) {
        return null;
      }

      return this.elements[i - 1][j - 1];
    },
    // Returns row k of the matrix as a vector
    row: function row(i) {
      if (i > this.elements.length) {
        return null;
      }

      return Vector.create(this.elements[i - 1]);
    },
    // Returns column k of the matrix as a vector
    col: function col(j) {
      if (j > this.elements[0].length) {
        return null;
      }

      var col = [],
          n = this.elements.length,
          k = n,
          i;

      do {
        i = k - n;
        col.push(this.elements[i][j - 1]);
      } while (--n);

      return Vector.create(col);
    },
    // Returns the number of rows/columns the matrix has
    dimensions: function dimensions() {
      return {
        rows: this.elements.length,
        cols: this.elements[0].length
      };
    },
    // Returns the number of rows in the matrix
    rows: function rows() {
      return this.elements.length;
    },
    // Returns the number of columns in the matrix
    cols: function cols() {
      return this.elements[0].length;
    },
    // Returns true iff the matrix is equal to the argument. You can supply
    // a vector as the argument, in which case the receiver must be a
    // one-column matrix equal to the vector.
    eql: function eql(matrix) {
      var M = matrix.elements || matrix;

      if (typeof M[0][0] == 'undefined') {
        M = Matrix.create(M).elements;
      }

      if (this.elements.length != M.length || this.elements[0].length != M[0].length) {
        return false;
      }

      var ni = this.elements.length,
          ki = ni,
          i,
          nj,
          kj = this.elements[0].length,
          j;

      do {
        i = ki - ni;
        nj = kj;

        do {
          j = kj - nj;

          if (Math.abs(this.elements[i][j] - M[i][j]) > Sylvester.precision) {
            return false;
          }
        } while (--nj);
      } while (--ni);

      return true;
    },
    // Returns a copy of the matrix
    dup: function dup() {
      return Matrix.create(this.elements);
    },
    // Maps the matrix to another matrix (of the same dimensions) according to the given function
    map: function map(fn) {
      var els = [],
          ni = this.elements.length,
          ki = ni,
          i,
          nj,
          kj = this.elements[0].length,
          j;

      do {
        i = ki - ni;
        nj = kj;
        els[i] = [];

        do {
          j = kj - nj;
          els[i][j] = fn(this.elements[i][j], i + 1, j + 1);
        } while (--nj);
      } while (--ni);

      return Matrix.create(els);
    },
    // Returns true iff the argument has the same dimensions as the matrix
    isSameSizeAs: function isSameSizeAs(matrix) {
      var M = matrix.elements || matrix;

      if (typeof M[0][0] == 'undefined') {
        M = Matrix.create(M).elements;
      }

      return this.elements.length == M.length && this.elements[0].length == M[0].length;
    },
    // Returns the result of adding the argument to the matrix
    add: function add(matrix) {
      var M = matrix.elements || matrix;

      if (typeof M[0][0] == 'undefined') {
        M = Matrix.create(M).elements;
      }

      if (!this.isSameSizeAs(M)) {
        return null;
      }

      return this.map(function (x, i, j) {
        return x + M[i - 1][j - 1];
      });
    },
    // Returns the result of subtracting the argument from the matrix
    subtract: function subtract(matrix) {
      var M = matrix.elements || matrix;

      if (typeof M[0][0] == 'undefined') {
        M = Matrix.create(M).elements;
      }

      if (!this.isSameSizeAs(M)) {
        return null;
      }

      return this.map(function (x, i, j) {
        return x - M[i - 1][j - 1];
      });
    },
    // Returns true iff the matrix can multiply the argument from the left
    canMultiplyFromLeft: function canMultiplyFromLeft(matrix) {
      var M = matrix.elements || matrix;

      if (typeof M[0][0] == 'undefined') {
        M = Matrix.create(M).elements;
      } // this.columns should equal matrix.rows


      return this.elements[0].length == M.length;
    },
    // Returns the result of multiplying the matrix from the right by the argument.
    // If the argument is a scalar then just multiply all the elements. If the argument is
    // a vector, a vector is returned, which saves you having to remember calling
    // col(1) on the result.
    multiply: function multiply(matrix) {
      if (!matrix.elements) {
        return this.map(function (x) {
          return x * matrix;
        });
      }

      var returnVector = matrix.modulus ? true : false;
      var M = matrix.elements || matrix;

      if (typeof M[0][0] == 'undefined') {
        M = Matrix.create(M).elements;
      }

      if (!this.canMultiplyFromLeft(M)) {
        return null;
      }

      var ni = this.elements.length,
          ki = ni,
          i,
          nj,
          kj = M[0].length,
          j;
      var cols = this.elements[0].length,
          elements = [],
          sum,
          nc,
          c;

      do {
        i = ki - ni;
        elements[i] = [];
        nj = kj;

        do {
          j = kj - nj;
          sum = 0;
          nc = cols;

          do {
            c = cols - nc;
            sum += this.elements[i][c] * M[c][j];
          } while (--nc);

          elements[i][j] = sum;
        } while (--nj);
      } while (--ni);

      var M = Matrix.create(elements);
      return returnVector ? M.col(1) : M;
    },
    x: function x(matrix) {
      return this.multiply(matrix);
    },
    // Returns a submatrix taken from the matrix
    // Argument order is: start row, start col, nrows, ncols
    // Element selection wraps if the required index is outside the matrix's bounds, so you could
    // use this to perform row/column cycling or copy-augmenting.
    minor: function minor(a, b, c, d) {
      var elements = [],
          ni = c,
          i,
          nj,
          j;
      var rows = this.elements.length,
          cols = this.elements[0].length;

      do {
        i = c - ni;
        elements[i] = [];
        nj = d;

        do {
          j = d - nj;
          elements[i][j] = this.elements[(a + i - 1) % rows][(b + j - 1) % cols];
        } while (--nj);
      } while (--ni);

      return Matrix.create(elements);
    },
    // Returns the transpose of the matrix
    transpose: function transpose() {
      var rows = this.elements.length,
          cols = this.elements[0].length;
      var elements = [],
          ni = cols,
          i,
          nj,
          j;

      do {
        i = cols - ni;
        elements[i] = [];
        nj = rows;

        do {
          j = rows - nj;
          elements[i][j] = this.elements[j][i];
        } while (--nj);
      } while (--ni);

      return Matrix.create(elements);
    },
    // Returns true iff the matrix is square
    isSquare: function isSquare() {
      return this.elements.length == this.elements[0].length;
    },
    // Returns the (absolute) largest element of the matrix
    max: function max() {
      var m = 0,
          ni = this.elements.length,
          ki = ni,
          i,
          nj,
          kj = this.elements[0].length,
          j;

      do {
        i = ki - ni;
        nj = kj;

        do {
          j = kj - nj;

          if (Math.abs(this.elements[i][j]) > Math.abs(m)) {
            m = this.elements[i][j];
          }
        } while (--nj);
      } while (--ni);

      return m;
    },
    // Returns the indeces of the first match found by reading row-by-row from left to right
    indexOf: function indexOf(x) {
      var ni = this.elements.length,
          ki = ni,
          i,
          nj,
          kj = this.elements[0].length,
          j;

      do {
        i = ki - ni;
        nj = kj;

        do {
          j = kj - nj;

          if (this.elements[i][j] == x) {
            return {
              i: i + 1,
              j: j + 1
            };
          }
        } while (--nj);
      } while (--ni);

      return null;
    },
    // If the matrix is square, returns the diagonal elements as a vector.
    // Otherwise, returns null.
    diagonal: function diagonal() {
      if (!this.isSquare) {
        return null;
      }

      var els = [],
          n = this.elements.length,
          k = n,
          i;

      do {
        i = k - n;
        els.push(this.elements[i][i]);
      } while (--n);

      return Vector.create(els);
    },
    // Make the matrix upper (right) triangular by Gaussian elimination.
    // This method only adds multiples of rows to other rows. No rows are
    // scaled up or switched, and the determinant is preserved.
    toRightTriangular: function toRightTriangular() {
      var M = this.dup(),
          els;
      var n = this.elements.length,
          k = n,
          i,
          np,
          kp = this.elements[0].length,
          p;

      do {
        i = k - n;

        if (M.elements[i][i] == 0) {
          for (j = i + 1; j < k; j++) {
            if (M.elements[j][i] != 0) {
              els = [];
              np = kp;

              do {
                p = kp - np;
                els.push(M.elements[i][p] + M.elements[j][p]);
              } while (--np);

              M.elements[i] = els;
              break;
            }
          }
        }

        if (M.elements[i][i] != 0) {
          for (j = i + 1; j < k; j++) {
            var multiplier = M.elements[j][i] / M.elements[i][i];
            els = [];
            np = kp;

            do {
              p = kp - np; // Elements with column numbers up to an including the number
              // of the row that we're subtracting can safely be set straight to
              // zero, since that's the point of this routine and it avoids having
              // to loop over and correct rounding errors later

              els.push(p <= i ? 0 : M.elements[j][p] - M.elements[i][p] * multiplier);
            } while (--np);

            M.elements[j] = els;
          }
        }
      } while (--n);

      return M;
    },
    toUpperTriangular: function toUpperTriangular() {
      return this.toRightTriangular();
    },
    // Returns the determinant for square matrices
    determinant: function determinant() {
      if (!this.isSquare()) {
        return null;
      }

      var M = this.toRightTriangular();
      var det = M.elements[0][0],
          n = M.elements.length - 1,
          k = n,
          i;

      do {
        i = k - n + 1;
        det = det * M.elements[i][i];
      } while (--n);

      return det;
    },
    det: function det() {
      return this.determinant();
    },
    // Returns true iff the matrix is singular
    isSingular: function isSingular() {
      return this.isSquare() && this.determinant() === 0;
    },
    // Returns the trace for square matrices
    trace: function trace() {
      if (!this.isSquare()) {
        return null;
      }

      var tr = this.elements[0][0],
          n = this.elements.length - 1,
          k = n,
          i;

      do {
        i = k - n + 1;
        tr += this.elements[i][i];
      } while (--n);

      return tr;
    },
    tr: function tr() {
      return this.trace();
    },
    // Returns the rank of the matrix
    rank: function rank() {
      var M = this.toRightTriangular(),
          rank = 0;
      var ni = this.elements.length,
          ki = ni,
          i,
          nj,
          kj = this.elements[0].length,
          j;

      do {
        i = ki - ni;
        nj = kj;

        do {
          j = kj - nj;

          if (Math.abs(M.elements[i][j]) > Sylvester.precision) {
            rank++;
            break;
          }
        } while (--nj);
      } while (--ni);

      return rank;
    },
    rk: function rk() {
      return this.rank();
    },
    // Returns the result of attaching the given argument to the right-hand side of the matrix
    augment: function augment(matrix) {
      var M = matrix.elements || matrix;

      if (typeof M[0][0] == 'undefined') {
        M = Matrix.create(M).elements;
      }

      var T = this.dup(),
          cols = T.elements[0].length;
      var ni = T.elements.length,
          ki = ni,
          i,
          nj,
          kj = M[0].length,
          j;

      if (ni != M.length) {
        return null;
      }

      do {
        i = ki - ni;
        nj = kj;

        do {
          j = kj - nj;
          T.elements[i][cols + j] = M[i][j];
        } while (--nj);
      } while (--ni);

      return T;
    },
    // Returns the inverse (if one exists) using Gauss-Jordan
    inverse: function inverse() {
      if (!this.isSquare() || this.isSingular()) {
        return null;
      }

      var ni = this.elements.length,
          ki = ni,
          i,
          j;
      var M = this.augment(Matrix.I(ni)).toRightTriangular();
      var np,
          kp = M.elements[0].length,
          p,
          els,
          divisor;
      var inverse_elements = [],
          new_element; // Matrix is non-singular so there will be no zeros on the diagonal
      // Cycle through rows from last to first

      do {
        i = ni - 1; // First, normalise diagonal elements to 1

        els = [];
        np = kp;
        inverse_elements[i] = [];
        divisor = M.elements[i][i];

        do {
          p = kp - np;
          new_element = M.elements[i][p] / divisor;
          els.push(new_element); // Shuffle of the current row of the right hand side into the results
          // array as it will not be modified by later runs through this loop

          if (p >= ki) {
            inverse_elements[i].push(new_element);
          }
        } while (--np);

        M.elements[i] = els; // Then, subtract this row from those above it to
        // give the identity matrix on the left hand side

        for (j = 0; j < i; j++) {
          els = [];
          np = kp;

          do {
            p = kp - np;
            els.push(M.elements[j][p] - M.elements[i][p] * M.elements[j][i]);
          } while (--np);

          M.elements[j] = els;
        }
      } while (--ni);

      return Matrix.create(inverse_elements);
    },
    inv: function inv() {
      return this.inverse();
    },
    // Returns the result of rounding all the elements
    round: function round() {
      return this.map(function (x) {
        return Math.round(x);
      });
    },
    // Returns a copy of the matrix with elements set to the given value if they
    // differ from it by less than Sylvester.precision
    snapTo: function snapTo(x) {
      return this.map(function (p) {
        return Math.abs(p - x) <= Sylvester.precision ? x : p;
      });
    },
    // Returns a string representation of the matrix
    inspect: function inspect() {
      var matrix_rows = [];
      var n = this.elements.length,
          k = n,
          i;

      do {
        i = k - n;
        matrix_rows.push(Vector.create(this.elements[i]).inspect());
      } while (--n);

      return matrix_rows.join('\n');
    },
    // Set the matrix's elements from an array. If the argument passed
    // is a vector, the resulting matrix will be a single column.
    setElements: function setElements(els) {
      var i,
          elements = els.elements || els;

      if (typeof elements[0][0] != 'undefined') {
        var ni = elements.length,
            ki = ni,
            nj,
            kj,
            j;
        this.elements = [];

        do {
          i = ki - ni;
          nj = elements[i].length;
          kj = nj;
          this.elements[i] = [];

          do {
            j = kj - nj;
            this.elements[i][j] = elements[i][j];
          } while (--nj);
        } while (--ni);

        return this;
      }

      var n = elements.length,
          k = n;
      this.elements = [];

      do {
        i = k - n;
        this.elements.push([elements[i]]);
      } while (--n);

      return this;
    }
  }; // Constructor function

  Matrix.create = function (elements) {
    var M = new Matrix();
    return M.setElements(elements);
  }; // Identity matrix of size n


  Matrix.I = function (n) {
    var els = [],
        k = n,
        i,
        nj,
        j;

    do {
      i = k - n;
      els[i] = [];
      nj = k;

      do {
        j = k - nj;
        els[i][j] = i == j ? 1 : 0;
      } while (--nj);
    } while (--n);

    return Matrix.create(els);
  }; // Diagonal matrix - all off-diagonal elements are zero


  Matrix.Diagonal = function (elements) {
    var n = elements.length,
        k = n,
        i;
    var M = Matrix.I(n);

    do {
      i = k - n;
      M.elements[i][i] = elements[i];
    } while (--n);

    return M;
  }; // Rotation matrix about some axis. If no axis is
  // supplied, assume we're after a 2D transform


  Matrix.Rotation = function (theta, a) {
    if (!a) {
      return Matrix.create([[Math.cos(theta), -Math.sin(theta)], [Math.sin(theta), Math.cos(theta)]]);
    }

    var axis = a.dup();

    if (axis.elements.length != 3) {
      return null;
    }

    var mod = axis.modulus();
    var x = axis.elements[0] / mod,
        y = axis.elements[1] / mod,
        z = axis.elements[2] / mod;
    var s = Math.sin(theta),
        c = Math.cos(theta),
        t = 1 - c; // Formula derived here: http://www.gamedev.net/reference/articles/article1199.asp
    // That proof rotates the co-ordinate system so theta
    // becomes -theta and sin becomes -sin here.

    return Matrix.create([[t * x * x + c, t * x * y - s * z, t * x * z + s * y], [t * x * y + s * z, t * y * y + c, t * y * z - s * x], [t * x * z - s * y, t * y * z + s * x, t * z * z + c]]);
  }; // Special case rotations


  Matrix.RotationX = function (t) {
    var c = Math.cos(t),
        s = Math.sin(t);
    return Matrix.create([[1, 0, 0], [0, c, -s], [0, s, c]]);
  };

  Matrix.RotationY = function (t) {
    var c = Math.cos(t),
        s = Math.sin(t);
    return Matrix.create([[c, 0, s], [0, 1, 0], [-s, 0, c]]);
  };

  Matrix.RotationZ = function (t) {
    var c = Math.cos(t),
        s = Math.sin(t);
    return Matrix.create([[c, -s, 0], [s, c, 0], [0, 0, 1]]);
  }; // Random matrix of n rows, m columns


  Matrix.Random = function (n, m) {
    return Matrix.Zero(n, m).map(function () {
      return Math.random();
    });
  }; // Matrix filled with zeros


  Matrix.Zero = function (n, m) {
    var els = [],
        ni = n,
        i,
        nj,
        j;

    do {
      i = n - ni;
      els[i] = [];
      nj = m;

      do {
        j = m - nj;
        els[i][j] = 0;
      } while (--nj);
    } while (--ni);

    return Matrix.create(els);
  };

  var $M = Matrix.create;

  var TRANSFORM_PREFIX = 'transform';

  var domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
      pfx = '',
      elem = document.createElement('div');

  for (var i = 0; i < domPrefixes.length; i++) {
    if (elem.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
      pfx = domPrefixes[i];
      TRANSFORM_PREFIX = '-' + pfx.toLowerCase() + '-';
      break;
    }
  }

  TRANSFORM_PREFIX += 'transform';
  var TransformUtils = {
    Translate: function Translate(el, pos) {
      if (!el) {
        return;
      }

      var cssTransformMatrix;

      {
        pos.z = pos.z || 0;
        var translationM = this.GetTranslationMatrix(pos.x, pos.y, pos.z);
        cssTransformMatrix = this.MatrixToString3D(translationM);
      }

      el.style[TRANSFORM_PREFIX] = cssTransformMatrix;
    },
    GetTranslationMatrix: function GetTranslationMatrix(translationX, translationY, translationZ) {
      var _translationX = translationX !== undefined ? translationX : 0;

      var _translationY = translationY !== undefined ? translationY : 0;

      var _translationZ = translationZ !== undefined ? translationZ : 0;

      return $M([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [_translationX, _translationY, _translationZ, 1]]);
    },
    GetRotationMatrix: function GetRotationMatrix(rX, rY, rZ) {
      var deg2rad = Math.PI / 180; // Degrees to radians constant

      var rotationXMatrix, rotationYMatrix, rotationZMatrix;
      rotationXMatrix = $M([[1, 0, 0, 0], [0, Math.cos(rX * deg2rad), Math.sin(-rX * deg2rad), 0], [0, Math.sin(rX * deg2rad), Math.cos(rX * deg2rad), 0], [0, 0, 0, 1]]);
      rotationYMatrix = $M([[Math.cos(rY * deg2rad), 0, Math.sin(rY * deg2rad), 0], [0, 1, 0, 0], [Math.sin(-rY * deg2rad), 0, Math.cos(rY * deg2rad), 0], [0, 0, 0, 1]]);
      rotationZMatrix = $M([[Math.cos(rZ * deg2rad), Math.sin(-rZ * deg2rad), 0, 0], [Math.sin(rZ * deg2rad), Math.cos(rZ * deg2rad), 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
      return rotationXMatrix.x(rotationYMatrix).x(rotationZMatrix);
    },
    GetScaleMatrix: function GetScaleMatrix(scaleX, scaleY, scaleZ) {
      var _scaleX = scaleX;

      var _scaleY = scaleY !== undefined ? scaleY : _scaleX;

      var _scaleZ = scaleZ !== undefined ? scaleZ : _scaleX;

      {
        return $M([[_scaleX, 0, 0, 0], [0, _scaleY, 0, 0], [0, 0, _scaleZ, 0], [0, 0, 0, 1]]);
      }
    },
    MatrixToString3D: function MatrixToString3D(transformationMatrix) {
      var stringTransform = 'matrix3d(';
      stringTransform += transformationMatrix.e(1, 1) + ',' + transformationMatrix.e(1, 2) + ',' + transformationMatrix.e(1, 3) + ',' + transformationMatrix.e(1, 4) + ',';
      stringTransform += transformationMatrix.e(2, 1) + ',' + transformationMatrix.e(2, 2) + ',' + transformationMatrix.e(2, 3) + ',' + transformationMatrix.e(2, 4) + ',';
      stringTransform += transformationMatrix.e(3, 1) + ',' + transformationMatrix.e(3, 2) + ',' + transformationMatrix.e(3, 3) + ',' + transformationMatrix.e(3, 4) + ',';
      stringTransform += transformationMatrix.e(4, 1) + ',' + transformationMatrix.e(4, 2) + ',' + transformationMatrix.e(4, 3) + ',' + transformationMatrix.e(4, 4);
      stringTransform += ')';
      return stringTransform;
    },
    SetTransformMatrix: function SetTransformMatrix(el, listMatrix) {
      var cssTransformMatrix;

      if (!Array.isArray(listMatrix)) {
        listMatrix = [listMatrix];
      }

      var translationM = this.GetResultMatrix(listMatrix);
      cssTransformMatrix = this.MatrixToString3D(translationM);
      el.style[TRANSFORM_PREFIX] = cssTransformMatrix;
    },
    GetResultMatrix: function GetResultMatrix(listMatix) {
      if (listMatix.length === 1) {
        return listMatix[0];
      } else {
        var resultMatrix = $M([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);

        for (var i = 0; i < listMatix.length; i++) {
          var nextMatrix = listMatix[i];
          resultMatrix = nextMatrix.x(resultMatrix);
        }

        return resultMatrix;
      }
    }
  };

  var StoreSelectView = /*#__PURE__*/function (_BaseView) {
    _inherits(StoreSelectView, _BaseView);

    var _super = _createSuper(StoreSelectView);

    function StoreSelectView(el) {
      var _this2 = this;

      var _this;

      _classCallCheck(this, StoreSelectView);

      _this = _super.call(this, el);
      _this.tween = null;
      _this.tweenObj = {
        value: 0
      };
      _this._height = _this.el.offsetHeight;
      _this.options = _this.el.querySelector('.js-options');
      TransformUtils.Translate(_this.options, {
        x: 0,
        y: -_this._height
      });

      var stores = _this.el.querySelectorAll('.js-option');

      for (var i = 0; i < stores.length; i++) {
        _this._seeOption(stores[i]);
      }

      _this._selects = _this.el.querySelectorAll('.js-select');

      for (var i = 0; i < _this._selects.length; i++) {
        _this._selects[i].onclick = function (e) {
          _newArrowCheck(this, _this2);

          _this._animIn();
        }.bind(this);
      }

      _this.el.onmouseleave = function () {
        _newArrowCheck(this, _this2);

        _this._animOut();
      }.bind(this);

      return _this;
    }

    _createClass(StoreSelectView, [{
      key: "_animIn",
      value: function _animIn() {
        var _this3 = this;

        if (this.tween && this.tween.isPlaying()) this.tween.stop();
        this.options.style.display = 'block';
        this.el.classList.add('open');
        this.tween = new TWEEN.Tween(this.tweenObj).to({
          value: 1
        }, 700).onUpdate(function (obj) {
          _newArrowCheck(this, _this3);

          this.options.style.opacity = obj.value;
          TransformUtils.Translate(this.options, {
            x: 0,
            y: -this._height * (1 - obj.value)
          });
        }.bind(this)).easing(TWEEN.Easing.Exponential.Out).start();
      }
    }, {
      key: "_animOut",
      value: function _animOut() {
        var _this4 = this;

        if (this.tween && this.tween.isPlaying()) this.tween.stop();
        this.options.style.display = 'block';
        new TWEEN.Tween(this.tweenObj).to({
          value: 0
        }, 1000).onUpdate(function (obj) {
          _newArrowCheck(this, _this4);

          this.options.style.opacity = obj.value;
          TransformUtils.Translate(this.options, {
            x: 0,
            y: -this._height * (1 - obj.value)
          });
        }.bind(this)).onComplete(function () {
          _newArrowCheck(this, _this4);

          this.el.classList.remove('open');
        }.bind(this)).easing(TWEEN.Easing.Exponential.Out).start();
      }
    }, {
      key: "_seeOption",
      value: function _seeOption(el) {
        var _this5 = this;

        el.onclick = function (e) {
          _newArrowCheck(this, _this5);

          console.log(e);

          this._animOut();

          var value = e.target.innerHTML;

          this._setSelect(value);

          new CitySelectedEvent(value).dispatch();
        }.bind(this);
      }
    }, {
      key: "_setSelect",
      value: function _setSelect(value) {
        if (value) {
          this._selects[1].querySelector('h3').innerHTML = value;
          this._selects[1].style.display = 'block';
        } else {
          this._selects[1].style.display = 'none';
        }
      }
    }]);

    return StoreSelectView;
  }(BaseView);

  var StoresSection = /*#__PURE__*/function (_BaseView) {
    _inherits(StoresSection, _BaseView);

    var _super = _createSuper(StoresSection);

    function StoresSection(el) {
      var _this;

      _classCallCheck(this, StoresSection);

      _this = _super.call(this, el, 'stores');
      _this.storesContainer = _this.el.querySelector('#js-store-results-container');
      _this.template = _this.storesContainer.children[0].cloneNode(true); //mobile store city select....

      _this.cityInput = _this.el.querySelector('#js-dropdown-content');
      _this.cityInput.onchange = _this._onCityInput.bind(_assertThisInitialized(_this)); //desktop store city select....

      _this._storeSelect = new StoreSelectView(_this.el.querySelector('.js-store-select'));
      _this.el.onclick = _this._handleStoreClick.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(StoresSection, [{
      key: "resetStores",
      value: function resetStores() {
        //clear stores
        this.storesContainer.innerHTML = '';

        for (var i = 0; i < 3; i++) {
          this.storesContainer.appendChild(this.template.cloneNode(true));
        }
      }
    }, {
      key: "setStores",
      value: function setStores(stores) {
        //clear stores
        this.storesContainer.innerHTML = '';

        for (var i = 0; i < 3; i++) {
          if (stores[i]) {
            this.storesContainer.appendChild(this._inflateTemplate(stores[i], i));
          } else {
            this.storesContainer.appendChild(this.template.cloneNode(true));
          }
        }
      }
    }, {
      key: "setCurrentStore",
      value: function setCurrentStore(id) {}
    }, {
      key: "_inflateTemplate",
      value: function _inflateTemplate(store, index) {
        var _this2 = this;

        //todo use shadow dom?
        var child = this.template.cloneNode(true);
        var type = Model.RetrieveModel(CopyProxy.NAME).get(store.type);
        var storeType = child.querySelector('h2');
        storeType.innerHTML = type;
        var storeLocation = child.querySelector('p');
        storeLocation.innerHTML = store.street + ' ' + store.num + ', ' + store.postalCode + ' ' + store.city;
        child.classList.remove('js-inactive');
        child.setAttribute('data-store', store.id);
        child.classList.add('js-' + store.type.replace('tommy_', ''));
        var content = child.children[0];
        content.style.opacity = 0;
        new TWEEN.Tween({
          value: 0
        }).to({
          value: 1
        }, 500).onUpdate(function (obj) {
          _newArrowCheck(this, _this2);

          content.style.opacity = obj.value + "";
        }.bind(this)).delay(index * 200).easing(TWEEN.Easing.Cubic.Out).start();
        return child;
      }
    }, {
      key: "_handleStoreClick",
      value: function _handleStoreClick(e) {
        var locationEl = e.target.parentNode;
        var storeID = locationEl.getAttribute('data-store');

        if (storeID) {
          locationEl.classList.add('js-selected');
          new StoreSelectedEvent(storeID).dispatch();
        }
      }
    }, {
      key: "_onCityInput",
      value: function _onCityInput(e) {
        var value = e.target.options[e.target.selectedIndex].value;
        new CitySelectedEvent(value).dispatch();
      }
    }]);

    return StoresSection;
  }(BaseView);

  var FormSubmitEvent = /*#__PURE__*/function (_BaseEvent) {
    _inherits(FormSubmitEvent, _BaseEvent);

    var _super = _createSuper(FormSubmitEvent);

    function FormSubmitEvent() {
      _classCallCheck(this, FormSubmitEvent);

      return _super.call(this, ON_FORM_SUBMIT);
    }

    return FormSubmitEvent;
  }(BaseEvent);

  var FormUpdateEvent = /*#__PURE__*/function (_BaseEvent) {
    _inherits(FormUpdateEvent, _BaseEvent);

    var _super = _createSuper(FormUpdateEvent);

    function FormUpdateEvent(input, data) {
      var _this;

      _classCallCheck(this, FormUpdateEvent);

      _this = _super.call(this, ON_FORM_UPDATE);
      _this.input = input;
      _this.data = data;
      return _this;
    }

    return FormUpdateEvent;
  }(BaseEvent);

  var InfoView = /*#__PURE__*/function (_BaseView) {
    _inherits(InfoView, _BaseView);

    var _super = _createSuper(InfoView);

    function InfoView(el) {
      var _this2 = this;

      var _this;

      _classCallCheck(this, InfoView);

      _this = _super.call(this, el, 'info');
      _this._form = _this.el.querySelector('form');

      var inputs = _this._form.querySelectorAll('input');

      for (var i = 0; i < inputs.length; i++) {
        _this._initInput(inputs[i]);
      } //prevent submit on 'enter'


      _this._form.onsubmit = function (e) {
        _newArrowCheck(this, _this2);

        e.preventDefault();

        var data = _this._handleChangeEvent(e);

        new FormSubmitEvent().dispatch();
      }.bind(this);

      _this._legalText = _this.el.querySelector('.js-info-terms');
      return _this;
    }

    _createClass(InfoView, [{
      key: "reset",
      value: function reset() {
        //todo des this reset to placeholder?
        var inputs = this._form.querySelectorAll('input');

        for (var i = 0; i < inputs.length; i++) {
          inputs[i].value = '';
        }
      } //--------------------------------------------

    }, {
      key: "_initInput",
      value: function _initInput(input) {
        var _this3 = this;

        var name = input.getAttribute('id');

        input.onchange = function (e) {
          _newArrowCheck(this, _this3);

          var data = this._handleChangeEvent();

          new FormUpdateEvent(name, data).dispatch();
        }.bind(this);
      }
    }, {
      key: "_handleChangeEvent",
      value: function _handleChangeEvent(e) {
        var _this4 = this;

        var data = this._parseValues();

        var errors = [];

        for (var name in data) {
          var inputs = Array.isArray(data[name].input) ? data[name].input : [data[name].input];

          if (!this._validate(name, data[name].value)) {
            errors = errors.concat(inputs);
          } else {
            inputs.forEach(function (input) {
              _newArrowCheck(this, _this4);

              return input.classList.remove('js-invalid');
            }.bind(this));
          }
        }

        errors.forEach(function (error) {
          _newArrowCheck(this, _this4);

          error.classList.add('js-invalid');
        }.bind(this));
        return data;
      }
    }, {
      key: "_validate",
      value: function _validate(name, value) {
        if (value === '') return true;

        switch (name) {
          case 'first-name':
          case 'last-name':
            return value.length >= 2;

          case 'dob':
            value = parseInt(value);
            return value >= 0 && value <= 31;

          case 'mob':
            value = parseInt(value);
            return value >= 0 && value <= 12;

          case 'yob':
            value = parseInt(value);
            return value > 1900 && value < new Date().getFullYear();

          case 'email':
            return this._validateEmail(value);

          case 'terms':
            return value;

          case 'newsletter':
            return true;

          case 'birth-date':
            return value !== 'invalid';
        }
      }
    }, {
      key: "_validateEmail",
      value: function _validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
    }, {
      key: "_parseValues",
      value: function _parseValues() {
        var value,
            data = {};

        var inputs = this._form.querySelectorAll('input');

        for (var i = 0; i < inputs.length; i++) {
          var name = inputs[i].getAttribute('id');

          switch (name) {
            case 'dob':
            case 'mob':
            case 'yob':
              value = inputs[i].value;
              break;

            case 'terms':
            case 'newsletter':
              value = inputs[i].checked;
              break;

            default:
              value = inputs[i].value;
              break;
          }

          data[name] = {
            value: value,
            input: inputs[i]
          };
        }
        /*data['birth-date'] = {
            value: this._parseBirthDate(data['dob'].value, data['mob'].value, data['yob'].value),
            input: [data['dob'].input, data['mob'].input, data['yob'].input]
        }*/


        return data;
      }
      /**
       * @param day
       * @param month
       * @param year
       * @returns {three possible values, '', 'yyyy-mm-dd' or 'invalid'}
       * @private
       */

    }, {
      key: "_parseBirthDate",
      value: function _parseBirthDate(day, month, year) {
        if (day == '' && month == '' && year == '') return "";
        day = day.length == 1 ? '0' + day : day;
        month = month.length == 1 ? '0' + month : month;
        var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        var days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

        if (months.indexOf(month) != -1 && days.indexOf(day) != -1) {
          if (month == '02' && day == '29' && leapYear(year) == false || month == '02' && day == '30' || month == '02' && day == '31' || month == '04' && day == '31' || month == '06' && day == '31' || month == '09' && day == '31' || month == '11' && day == '31') {
            return 'invalid';
          } else {
            var GivenDate = year + '-' + month + '-' + day;
            var CurrentDate = new Date();
            GivenDate = new Date(GivenDate);

            if (GivenDate > CurrentDate) {
              return 'invalid';
            } else {
              return GivenDate;
            }
          }
        } else {
          return 'invalid';
        }
      }
    }, {
      key: "_leapYear",
      value: function _leapYear(year) {
        return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
      }
    }]);

    return InfoView;
  }(BaseView);

  var ScrollStopEvent = /*#__PURE__*/function (_BaseEvent) {
    _inherits(ScrollStopEvent, _BaseEvent);

    var _super = _createSuper(ScrollStopEvent);

    function ScrollStopEvent() {
      _classCallCheck(this, ScrollStopEvent);

      return _super.call(this, ON_SCROLL_STOP);
    }

    return ScrollStopEvent;
  }(BaseEvent);

  var ScrollEvent = /*#__PURE__*/function (_BaseEvent) {
    _inherits(ScrollEvent, _BaseEvent);

    var _super = _createSuper(ScrollEvent);

    function ScrollEvent(scrollPos, destScrollPos, ratio, scrollHeight) {
      var _this;

      _classCallCheck(this, ScrollEvent);

      _this = _super.call(this, ON_SCROLL);
      _this.ratio = ratio;
      _this.scrollPos = scrollPos;
      _this.destScrollPos = destScrollPos;
      _this.scrollHeight = scrollHeight;
      return _this;
    }

    return ScrollEvent;
  }(BaseEvent);

  var ScrollMananger = /*#__PURE__*/function (_BaseView) {
    _inherits(ScrollMananger, _BaseView);

    var _super = _createSuper(ScrollMananger);

    function ScrollMananger(el, scrollContainer) {
      var _this;

      _classCallCheck(this, ScrollMananger);

      _this = _super.call(this, el);
      _this.scrollCont = scrollContainer;
      _this._scrollParent = window;
      _this._scrollParent.onscroll = _this._onScroll.bind(_assertThisInitialized(_this));
      _this.height = _this.windowHeight = 0;
      _this.offsetTop = _this.destOffsetTop = 0;
      _this.isScrolling = false;
      return _this;
    }

    _createClass(ScrollMananger, [{
      key: "update",
      value: function update() {
        var diff = Math.abs(this.destOffsetTop - this.offsetTop);

        if (diff > 1e-6) {
          //console.log(diff | 0);
          this.isScrolling = true;

          this._setOffsetTop(this.offsetTop + (this.destOffsetTop - this.offsetTop) * 0.1);

          return true;
        }

        if (this.isScrolling) {
          this.isScrolling = false;
          if (this.destOffsetTop == 0) this._setOffsetTop(0);
          new ScrollStopEvent().dispatch();
        }

        return false;
      }
    }, {
      key: "onResize",
      value: function onResize(w, h) {
        this.windowWidth = w;
        this.windowHeight = h;

        this._recalculateHeight();
      } //--------------------------------------------------------------

    }, {
      key: "_onScroll",
      value: function _onScroll(e) {
        this.destOffsetTop = -(e.currentTarget.scrollTop != undefined ? e.currentTarget.scrollTop : e.currentTarget.pageYOffset);
      }
    }, {
      key: "_recalculateHeight",
      value: function _recalculateHeight() {
        var height = 0;

        for (var i = 0; i < this.scrollCont.children.length; i++) {
          height += this.scrollCont.children[i].offsetHeight;
        }

        this.height = height < this.scrollCont.offsetHeight ? this.scrollCont.offsetHeight : height;
        this.el.style.height = this.height + 'px';
      }
    }, {
      key: "_setOffsetTop",
      value: function _setOffsetTop(offsetTop) {
        this.offsetTop = offsetTop;
        TransformUtils.Translate(this.scrollCont, {
          x: 0,
          y: this.offsetTop
        });

        this._dispatch();
      }
    }, {
      key: "_dispatch",
      value: function _dispatch() {
        var ratio = this._getRatio();

        new ScrollEvent(this.offsetTop, this.destOffsetTop, ratio, this.height).dispatchImmediate();
      }
    }, {
      key: "_getRatio",
      value: function _getRatio() {
        return this.offsetTop / (-this.height + this.windowHeight);
      }
    }]);

    return ScrollMananger;
  }(BaseView);

  var CalendarView = /*#__PURE__*/function (_BaseView) {
    _inherits(CalendarView, _BaseView);

    var _super = _createSuper(CalendarView);

    function CalendarView(el) {
      var _this2 = this;

      var _this;

      _classCallCheck(this, CalendarView);

      _this = _super.call(this, el, 'calendar');
      _this._iframe = _this.el.querySelector('iframe');
      _this.loaderContainer = document.getElementsByClassName('loaderContainer')[0];

      _this._iframe.addEventListener('load', function (e) {
        _newArrowCheck(this, _this2);

        new BaseEvent(ON_IFRAME_LOADED).dispatch();

        _this._hideLoader();
      }.bind(this));

      _this.tweenObj = {
        value: 0
      };
      _this.tween = null;
      return _this;
    }

    _createClass(CalendarView, [{
      key: "show",
      value: function show() {
        this._showLoader();
      }
    }, {
      key: "setUrl",
      value: function setUrl(url) {
        this._iframe.setAttribute('src', url);
      } //---------------------------------------------

    }, {
      key: "_showLoader",
      value: function _showLoader() {
        var _this3 = this;

        this.loaderContainer.style.display = 'block';
        this.loaderContainer.style.opacity = 0;
        if (this.tween && this.tween.isPlaying()) this.tween.stop();
        new TWEEN.Tween(this.tweenObj).to({
          value: 1
        }, 500).onUpdate(function (obj) {
          _newArrowCheck(this, _this3);

          this.loaderContainer.style.opacity = obj.value;
        }.bind(this)).easing(TWEEN.Easing.Cubic.Out).start();
      }
    }, {
      key: "_hideLoader",
      value: function _hideLoader() {
        var _this4 = this;

        if (this.tween && this.tween.isPlaying()) this.tween.stop();
        new TWEEN.Tween(this.tweenObj).to({
          value: 0
        }, 500).onUpdate(function (obj) {
          _newArrowCheck(this, _this4);

          this.loaderContainer.style.opacity = obj.value;
        }.bind(this)).onComplete(function () {
          _newArrowCheck(this, _this4);

          this.loaderContainer.style.display = 'none';
        }.bind(this)).easing(TWEEN.Easing.Cubic.Out).start();
      }
    }]);

    return CalendarView;
  }(BaseView);

  var MainView = /*#__PURE__*/function (_BaseView) {
    _inherits(MainView, _BaseView);

    var _super = _createSuper(MainView);

    function MainView(el) {
      _classCallCheck(this, MainView);

      return _super.call(this, el);
    } //---------------------------------------------------


    _createClass(MainView, [{
      key: "initialize",
      value: function initialize() {
        this._initializeModels();

        this._initializeControllers();

        this._initializeViews(); //initialize views


        this._setupWindow(); //add globals for css


        var market = Model.RetrieveModel(SessionProxy.NAME).get('language');
        this.el.classList.add(market);
        var scrollExpander = document.querySelector('#js-scroll-expander');
        this._scrollManager = new ScrollMananger(scrollExpander, this.el);
        this._fixedHeaderOffset = 0; //to get the layouts started

        window.dispatchEvent(new Event('resize'));
      }
      /***
       * Update current sketch and smooth scroll
       * @param time
       */

    }, {
      key: "draw",
      value: function draw(time) {
        //update views here..
        new TickEvent(time).dispatchImmediate();
        TWEEN.update(time);
        BaseController.update();

        var invalidated = this._scrollManager.update();

        var offsetTop = this._scrollManager.offsetTop;
        var offsetMenu = this._fixedHeaderOffset;
        var top = -(Math.min(-offsetMenu, offsetTop) + offsetMenu);
        TransformUtils.Translate(this._header, {
          x: 0,
          y: top
        });
        TransformUtils.Translate(this._menu, {
          x: 0,
          y: top
        }); //mobile only..

        if (this.windowWidth < 767) {
          // console.log(this._fixedHeaderOffset, this._scrollManager.offsetTop.toFixed(2));
          this._header.style.opacity = 1 - Math.pow(this._scrollManager.offsetTop / -this._fixedHeaderOffset, 4);
        }
      }
    }, {
      key: "scrollToSection",
      value: function scrollToSection(section) {
        var offsetTop = section.el.offsetTop; //120 is nav + header height

        var navHeight = this.windowWidth < 767 ? 120 : 100;
        var scrollPos = offsetTop - navHeight;
        window.scrollTo(0, scrollPos);
      } //---------------------------------------------------

    }, {
      key: "_setupWindow",
      value: function _setupWindow() {
        var _this = this;

        window.onresize = RandomUtils.debounce(function () {
          _newArrowCheck(this, _this);

          this._onResize();
        }.bind(this), 500);
        window.dispatchEvent(new Event('resize'));
      }
    }, {
      key: "_onResize",
      value: function _onResize() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight; // First we get the viewport height and we multiple it by 1% to get a value for a vh unit

        var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

        document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));

        this._scrollManager.onResize(this.windowWidth, this.windowHeight);

        var navHeight = this.windowWidth < 767 ? 60 : 100;
        this._fixedHeaderOffset = this._header.offsetHeight - navHeight;
        new ResizeEvent(this.windowWidth, this.windowHeight).dispatch();
      }
    }, {
      key: "_initializeControllers",
      value: function _initializeControllers() {
        this._applicationController = new ApplicationController(this);
        new TrackingMediator();
      }
    }, {
      key: "_initializeModels",
      value: function _initializeModels() {
        new AssetsProxy();
        new CopyProxy(Object.assign({}, __SAPPER__.preloaded[0].combined));
        new SessionProxy(Object.assign({}, __SAPPER__.preloaded[0].session));
        new StoresProxy(Object.assign({}, __SAPPER__.preloaded[0].stores));
        new BookingDataModel();
      }
    }, {
      key: "_initializeViews",
      value: function _initializeViews() {
        var section = this.el.querySelector('#js-store');
        this._storesSection = new StoresSection(section);

        this._applicationController.registerSection(this._storesSection);

        section = this.el.querySelector('#js-info');
        this._infoSection = new InfoView(section);

        this._applicationController.registerSection(this._infoSection);

        section = this.el.querySelector('#js-calendar');
        this._calendarSection = new CalendarView(section);

        this._applicationController.registerSection(this._calendarSection);

        this._header = this.el.querySelector('#js-header');
        this._menu = this.el.querySelector('#js-menu');
      }
    }]);

    return MainView;
  }(BaseView);

  var mainView = new MainView(document.querySelector('.main'));
  mainView.initialize();

  function draw() {
    window.requestAnimationFrame(draw);
    var time = window.performance.now();
    mainView.draw(time);
  }

  draw();

}());
