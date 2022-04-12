import { post } from "./api"

class AuthService {
    async register (name, email, password, document) {
        return post('auth/register', {
            name,
            email,
            password,
            document,
            documentType: 'cpf',
            area: 'distributer'
        })
    }

    async login (email, password) {
        return post('auth/login', {
            email,
            password,
            area: 'distributer'
        })
    }
}


export default new AuthService()