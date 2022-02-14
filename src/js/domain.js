'use strict';

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
    if (!_error.ok) {
        console.warn(new URL(_site) + ' Fetch error: ' + _error.status);
        console.warn(_error);
        return "F" + _error.status;
    }
    else {
        console.error(new URL(_site) + ' Parsing error: ' + _error);
        console.error(_error);
        return "errP";
    }
}

export function ReplaceName(name) {
    return name.toLowerCase().replaceAll(' ', '-').replaceAll(/[.?!)(,:']/g, '');
}

export function copytext(el) {
    /*
        var $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($(el).text()).select();
        document.execCommand("copy");
        $tmp.remove();
    */
}

export function copyHtml(el) {
    //document.ondragstart =
    //    document.onselectstart =
    //    document.oncontextmenu =
    //    document.body.oncontextmenu =
    //    document.body.onkeydown =
    //    () => true;

    console.log("asdasdasda" + el);
    var tmp = document.createElement("textarea");
    tmp.id = "copyTextarea";
    tmp.value = el;
    document.getElementsByTagName("body")[0].append(tmp);

    var copyTextarea = document.getElementById("copyTextarea");
    copyTextarea.focus();
    copyTextarea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
}