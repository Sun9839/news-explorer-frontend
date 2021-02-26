class MainApi {
    constructor({ api }) {
        this._api = api;
    }
    _handleResponse(response){
        if (response.ok) {
            return response.json();
        } else {
            console.log('_handleResponse rejection')
            return Promise.reject(response.statusText)
        }
    }
    _handleResponseError(err){
        console.log('_handleResponseError')
        return Promise.reject(err.message)
    }
    createUser(data){
        return fetch(`${this._api}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                name: data.name,
            })
        }).then(this._handleResponse).catch(this._handleResponseError);
    }
    login(data){
        return fetch(`${this._api}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        }).then(this._handleResponse).catch(this._handleResponseError);
    }
}

export const mainApi = new MainApi({
    api : 'https://api.alexander9839news.students.nomoredomains.icu',
});
