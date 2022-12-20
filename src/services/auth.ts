import { IUser } from "../interfaces/user"
import UserModel from "../models/user"
import { encrypt } from "../utils/bcrypt.handler"

const registerNewUser = async({ email, password, name }: IUser) => {
    const checkIs = await UserModel.findOne({ email })
    if(checkIs) return 'ALREADY_USER'

    const passHash = await encrypt(password)
    const registerNewUser = await UserModel.create({ email, password: passHash, name })
    return registerNewUser
}

const logInUser = async() => {}

export { registerNewUser, logInUser }