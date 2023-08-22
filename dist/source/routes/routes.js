"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const helloWorld_route_1 = require("./helloWorld.route");
const create_route_1 = require("./create.route");
const update_route_1 = require("./update.route");
const deleteCupom_route_1 = require("./deleteCupom.route");
function routes() {
    return [
        helloWorld_route_1.helloWorld,
        create_route_1.createRoute,
        update_route_1.updateRoute,
        deleteCupom_route_1.deleteCupomRoute,
    ];
}
exports.routes = routes;
