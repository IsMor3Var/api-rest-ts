import "dotenv/config"
import express from 'express'
import cors from 'cors'

import { dbConnect } from './config/mongo'
import { router } from './routes'

const PORT = process.env.PORT || 3005
const app = express()

app.use(cors())

dbConnect()

app.use(router)

app.listen(PORT, () => {
    console.log(`Listo en el puerto ${PORT}`);
})