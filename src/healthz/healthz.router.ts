import express, {Request, Response} from 'express'
export const healthzRouter = express.Router();

healthzRouter.get('/', async (_request: Request, response: Response) => {
    try {
        response.status(200).send({status: true})
    } catch (e: any) {
        response.status(500).send(e)
    }
});
