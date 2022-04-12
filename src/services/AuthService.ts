import { post, setAuthorization } from "./api"

class AuthService {
    async register(name: string, email: string, password: string, document: string) {
        const result = await post('auth/register', {
            name,
            email,
            password,
            document,
            documentType: 'cpf',
            area: 'distributer'
        })

        if (result.code === 200) {
            setAuthorization(result.data.accessToken)
        }

        return result
    }

    async login(email: string, password: string) {
        const result = await post('auth/login', {
            email,
            password,
            area: 'distributer'
        })

        if (result.code === 200) {
            setAuthorization(result.data.accessToken)
        }

        return result
    }

    async logout() {
        setAuthorization(null)
    }
}


export default new AuthService()