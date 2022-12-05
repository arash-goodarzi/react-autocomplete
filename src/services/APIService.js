const headers = {
    "Accept": "application/json",
    "Content-type" : "application/json"
}

function joinURL(baseURL, url) {
    return `${baseURL}/${url}`;
}

class APIService{
    constructor() {
        this.domain="https://jsonplaceholder.typicode.com"
    }

    request(url, method = "POST", data = null) {
        url = joinURL(this.domain, url);
        const options = {
            headers,
            method,
        }
        if (data) {
            options.body = JSON.stringify({...data})
        }

        return fetch(url, options);
    }

    get(url, id) {
        const method = 'GET';
        if (id) {
            url = `${url}/${id}`;
        }
        return this.request(url, method).then(res => res.json());
    }



}

export default APIService;