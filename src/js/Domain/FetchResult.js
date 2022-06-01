export async function ResponseToHTML(response) {
    let bodyText = await response.text();

    let parser = new DOMParser();
    let bodyHtml = parser.parseFromString(bodyText, 'text/html');

    return bodyHtml;
}

export function fetchStatusHTML(response) {
    return response.ok ? ResponseToHTML(response) : Promise.reject(response)
}

export function fetchStatusJSON(response) {
    return response.ok ? response.json() : Promise.reject(response)
}

export function fetchCatch(_error, _site) {
    if (_error instanceof TypeError) {
        if (_error.message == "Failed to fetch") {
            console.warn('TypeError: ' + new URL(_site));
            console.warn(_error);
            return "Fetch";
        }
    }

    if (_error instanceof Response) {
        if (!_error.ok) {
            console.warn('Response: ' + new URL(_site));
            console.warn(_error);
            return "F" + _error.status;
        }
    }

    console.warn('Error: ' + new URL(_site));
    console.warn(_error);
    return "Err";
}