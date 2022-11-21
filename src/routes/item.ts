import { Request, Router, Response } from 'express'

const router = Router()

router.get('/items', (_req: Request, res: Response) => {
    res.send({ data: 'Aqui van los modelos' })
})

export { router }