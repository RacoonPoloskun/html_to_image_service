import express, {Request, Response} from 'express'
import nodeHtmlToImage from 'node-html-to-image'

export const toImageRouter = express.Router();

toImageRouter.post('/', async (request: Request, response: Response) => {
    const html = request.body.html;

    await nodeHtmlToImage({
        puppeteerArgs: {
            args: ['--no-sandbox'],
        },
        html: html
    }).then(function (img) {
        response.writeHead(200, { 'Content-Type': 'image/png' });
        response.end(img, 'binary');
    }).catch((e) => {
        console.log(e)
    });
});
