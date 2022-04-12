const BASE_URL = 'https://api-igas.herokuapp.com'

export const post = async (action, body) => {
    return fetch(`${BASE_URL}/${action}`, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(body)
    }).then(response => {
        return response.json()
    }).catch(error => {
        throw error
    })
}