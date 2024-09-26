"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toImageRouter = void 0;
const express_1 = __importDefault(require("express"));
const node_html_to_image_1 = __importDefault(require("node-html-to-image"));
exports.toImageRouter = express_1.default.Router();
exports.toImageRouter.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const html = request.body;
    console.log(html);
    try {
        yield (0, node_html_to_image_1.default)({
            puppeteerArgs: {
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
            },
            html: html
        }).then(function (img) {
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(img, 'binary');
        }).catch((e) => {
            console.log(e);
        });
    }
    catch (e) {
        response.status(500).send(e);
    }
}));
