const BASE_URL = 'https://api-igas.herokuapp.com'

let authorization
export const setAuthorization = (token: string) => (authorization = token)

export const post = async (action: string, body?: any) => {
    return fetch(`${BASE_URL}/${action}`, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
            'Authorization': authorization ? `Bearer ${authorization}` : undefined
        },
        body: JSON.stringify(body || {})
    }).then(response => {
        return response.json()
    }).catch(error => {
        console.log('error', error)
        throw error
    })
}

export const get = async (action: string, params?: any) => {
    const _params = Object.entries(params || {}).map(([k, v]) => `${k}=${v}`).join('&')

    return fetch(`${BASE_URL}/${action}?${_params}`, {
        method: 'get',
        headers: {
            'content-type': 'application/json',
            'Authorization': authorization ? `Bearer ${authorization}` : undefined
        }
    }).then(response => {
        return response.json()
    }).catch(error => {
        console.log('error', error)
        throw error
    })
}

export const put = async (action: string, body?: any) => {
    return fetch(`${BASE_URL}/${action}`, {
        method: 'put',
        headers: {
            'content-type': 'application/json',
            'Authorization': authorization ? `Bearer ${authorization}` : undefined
        },
        body: JSON.stringify(body || {})
    }).then(response => {
        return response.json()
    }).catch(error => {
        console.log('error', error)
        throw error
    })
}

export const delete_ = async (action: string) => {
    return fetch(`${BASE_URL}/${action}`, {
        method: 'delete',
        headers: {
            'content-type': 'application/json',
            'Authorization': authorization ? `Bearer ${authorization}` : undefined
        },
    }).then(response => {
        return response.json()
    }).catch(error => {
        console.log('error', error)
        throw error
    })
}