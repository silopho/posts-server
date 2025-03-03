import userRepository from "./userRepository"
import { ICreatePost, ICreateUser, IError, ISuccess, IUser } from "../types/types"

// Добавь подпись токена и хеширование пароля
async function registrationUser(data: ICreateUser): Promise< IError | ISuccess<IUser> > {
    const userByEmail = await userRepository.getUserByEmail(data.email);
    if (userByEmail) {
        return { status: "error", message: "email already exists" };
    }

    const userByUsername = await userRepository.getUserByUsername(data.username);
    if (userByUsername) {
        return { status: "error", message: "username already exists" };
    }

    const newUser = await userRepository.createUser(data);
    if (!newUser) {
        return { status: "error", message: "create error" };
    }

    return { status: "success", data: newUser };
}

async function loginUser(data: ICreatePost): Promise< IError | ISuccess<IUser> > {
    const user = await userRepository.getUserByEmail(data.email)
    if (!user) {
        return { status: 'error', message: 'user not found'}
    }
    if (data.password != user.password) {
        return { status: 'error', message: 'password incorrect'}
    }
    return {status: 'success', data: user};
}
export default { registrationUser, loginUser }