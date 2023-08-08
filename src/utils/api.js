const API_URL = 'https://shopbackend-michalhajok.vercel.app/';

function request(endpoint, method = 'GET', data = null) {
    const config = {
        method,
        mode: 'cors',
        headers: {
            'Content-type': 'application/json'
        }
    };

    if (method === 'POST' || method === 'PATCH') {
        config.body = JSON.stringify(data);
    }
    const url = `${API_URL}${endpoint}`;
    return fetch(url, config);
}

function get(endpoint) {
    return request(endpoint);
}

function post(endpoint, data) {
    return request(endpoint, 'POST', data);
}

function patch(endpoint, data) {
    return request(endpoint, 'PATCH', data);
}

function _delete(endpoint) {
    return request(endpoint, 'DELETE');
}

export default {
    get,
    post,
    patch,
    delete: _delete
};
