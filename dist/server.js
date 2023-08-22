"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routes_1 = require("./source/routes/routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, routes_1.routes)());
app.listen(process.env.PORT, () => { console.log('Server is on in port ' + process.env.PORT); });
