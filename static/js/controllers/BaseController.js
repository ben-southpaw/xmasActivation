export default class BaseController {

    constructor() {
        BaseController._controllers.push(this);
        this.eventHandlers = [];
    }

    listenTo(type, handler) {
        if (
            !this.eventHandlers[type]
        ) {
            this.eventHandlers[type] = [];
        }
        this.eventHandlers[type].push(handler);
    }

    static dispatch(event) {
        setTimeout(function () {
            BaseController.eventQueue.push(event);
        }, 1);
    }

    static dispatchImmediate(event) {
        BaseController._controllers.forEach(controller => {
            if (controller.eventHandlers[event.eventType]) {
                controller.eventHandlers[event.eventType].forEach(handler => {
                    handler.call(controller, event); //(event);
                });
            }
        });
    }

    static update() {

        try {
            var _this = this;

            if (BaseController.eventQueue) {
                BaseController.eventQueue.forEach(event => {

                    BaseController._controllers.forEach(controller => {
                        if (controller.eventHandlers[event.eventType]) {
                            controller.eventHandlers[event.eventType].forEach(handler => {
                                handler.call(controller, event); //(event);
                            });
                        }
                    });
                });
            }

        } catch (e) {
            console.error(e);
            console.log(e.stack);
        }

        BaseController.eventQueue = [];
    }


}

BaseController._controllers = [];
