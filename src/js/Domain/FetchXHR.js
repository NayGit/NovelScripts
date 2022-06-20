export const FXmode = { fetchHTML: 'fetchHTML', fetchJSON: 'fetchJSON', xhrHTML: 'xhrHTML', xhrJSON: 'xhrJSON' };

export async function fetchXHR(_fxMode, _url, _param = {}) {
    //let uA = window.navigator.userAgent.replace(/\(.*?\)/, "(Windows NT 10.0; Win64; x64)").replace(" Mobile", "");
    //, {
    //    headers: {
    //        'User-Agent': uA
    //    }
    //}

    _param = Object.assign({},
        {},
        //{
            //headers: { 'User-Agent': 'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36' },
            //headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36' },
        //},
        _param
    )

    if (_fxMode === FXmode.fetchHTML || _fxMode === FXmode.fetchJSON) {
        if (_param["body"] === undefined && _param["data"] !== undefined) {
            _param["body"] = _param["data"];
        }

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
        if (_param["data"] === undefined && _param["body"] !== undefined) {
            _param["data"] = _param["body"];
        }

        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest(Object.assign(_param, {
                url: _url,
                onload: function (xhr) {
                    //for (let o in xhr)
                    //    console.warn(o, xhr[o]);

                    //console.info(xhr["response"]);
                    //console.warn(xhr.response);

                    let response = convertResponse(xhr);
                    if (!response.ok) {
                        return reject(response);
                    }

                    try {
                        if (_fxMode === FXmode.xhrHTML) {
                            let parser = new DOMParser();
                            resolve(parser.parseFromString(xhr.response, 'text/html'));
                        }

                        if (_fxMode === FXmode.xhrJSON) {
                            resolve(JSON.parse(xhr.responseText));
                        }
                    }
                    catch {
                        reject(response);
                    }

                },
                onerror: function (xhr) {
                    reject(convertResponse(xhr));
                }
            }));
        });
    }
}

function convertResponse(_xhr) {
    return new Response(
        _xhr.response,
        {
            "status": (_xhr.status > 0) ? _xhr.status : 599,
            "statusText": "XMLHttpRequest: Error. " + _xhr.statusText,
        }
    );

    //for (let r in tmpR)
    //    console.info(r, tmpR[r]);

    //return tmpR;
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