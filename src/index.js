"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const toImage_router_1 = require("./to-image/toImage.router");
const healthz_router_1 = require("./healthz/healthz.router");
const PORT = 80;
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1/toImage', toImage_router_1.toImageRouter);
app.use('/healthz', healthz_router_1.healthzRouter);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
