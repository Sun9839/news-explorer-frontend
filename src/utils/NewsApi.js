class NewsApi {
    constructor({ apiKey }) {
        this._apiKey = apiKey;
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
    findNewses(question){
        return fetch(`http://newsapi.org/v2/everything?q=${question}&from=7days&to=now&sortBy=publishedAt&apiKey=${this._apiKey}`, {
            method: 'GET',
        }).then(this._handleResponse).catch(this._handleResponseError);
    }
}

export const newsApi = new NewsApi({
    apiKey : 'b839136e90324f53b1bfd863ffe2c810',
});
