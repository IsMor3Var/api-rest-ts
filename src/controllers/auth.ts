import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handler'
import { registerNewUser, logInUser } from '../services/auth'

const register = ({ body }: Request, res:  Response) => {
    try {
        const responseUser = registerNewUser(body);
        res.send(responseUser)
    } catch (error) {
        handleHttp(res, "ERROR_POST_REGISTER")
    }
}

const login = (_req: Request, res:  Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_POST_LOGIN")
    }
}

export { register, login }