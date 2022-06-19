export const FXmode = { fetchHTML: 'fetchHTML', fetchJSON: 'fetchJSON', xhrHTML: 'xhrHTML', xhrJSON: 'xhrJSON' };

export async function fetchXHR(_fxMode, _url, _param = {}) {
    if (_fxMode === FXmode.fetchHTML || _fxMode === FXmode.fetchJSON) {
        return await fetch(_url, _param)
            .then(async response => {
                if (!response.ok) {
                    return Promise.reject(response);
                }

                if (_fxMode === FXmode.fetchHTML) {
                    let parser = new DOMParser();
                    return parser.parseFromString(await response.text(), 'text/html');
                }

                if (_fxMode === FXmode.fetchJSON) {
                    return response.json();
                }
            });
    }
    else {
        // novelmtCom: redirect???

        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest(Object.assign(_param, {
                url: _url,
                onload: function (response) {
                    //for (let o in response)
                    //    console.warn(o, response[o]);

                    //console.info(response["response"]);
                    //console.warn(response.response);

                    if (_fxMode === FXmode.xhrHTML) {
                        let parser = new DOMParser();
                        resolve(parser.parseFromString(response.response, 'text/html'));
                    }

                    if (FXmode === FXmode.xhrJSON) {
                        resolve(JSON.parse(response.responseText));
                    }

                    reject(response);
                },
                onerror: function (response) {
                    reject(response);
                }
            }));
        });
    }
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