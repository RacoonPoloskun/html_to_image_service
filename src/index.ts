import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import {toImageRouter} from "./to-image/toImage.router";
import {healthzRouter} from "./healthz/healthz.router";

const PORT = 80

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.text({ type: 'text/html' }));

app.use('/api/v1/toImage', toImageRouter)
app.use('/healthz', healthzRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
