import { fetchStatusHTML, fetchStatusJSON, fetchCatch } from 'Domain/FetchResult';

// возвращает куки с указанным name. Или undefined, если ничего не найдено
export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function bookWebNovel(loc) {
    let p = loc.pathname.split('/');

    let book = p[2].split('_');

    if (book.length == 2)
        return book[1];
    else
        return p[2];
}

export function glavaWebNovel(loc) {
    let p = loc.pathname.split('/');

    let glava = p[3].split('_');

    if (glava.length == 2)
        return glava[1];
    else
        return p[3];
}

export async function downloadBookIfno(_loc) {
    let url = _loc.origin + '/go/pcm/book/get-book-detail?_csrfToken=' + getCookie("_csrfToken") + '&bookId=' + bookWebNovel(_loc);

    return await fetch(url)
        .then(res => fetchStatusJSON(res))
        .then(data => {
            return data;
        })
        .catch(err => fetchCatch(err, url));
}

export async function downloadBookChapters(_loc) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'GET',
            url: "https://idruid.webnovel.com/app/api/book/get-chapters?bookId=" + bookWebNovel(_loc) + "&maxUpdateTime=0&maxIndex=0&sign=",
            anonymous: true,
            type: 'json',
            headers: { 'User-Agent': 'Mozilla/mobile QDHWReaderAndroid/5.9.3/643/2000002/000000005bfaef39ffffffffd99fa8a4' },
            onload: function (data) {
                resolve(JSON.parse(data.response));

            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}

export function GetChapterIndex(_bookChapters, _index) {
    for (let chapter of _bookChapters.Data.Chapters) {
        if (chapter.Index === _index * 1) {
            return chapter;
        }
    }
}

export function GetChapterId(_bookChapters, _cId) {
    for (let chapter of _bookChapters.Data.Chapters) {
        if (chapter.Id === _cId * 1) {
            return chapter;
        }
    }
}

export function GetChapterName(_bookChapters, _cName) {
    let cloneBI = JSON.parse(JSON.stringify(_bookChapters));

    for (let chapter of cloneBI.Data.Chapters.reverse()) {
        if (chapter.Name === _cName) {
            return chapter;
        }
    }
}

export function GetChapterLast(_bookChapters) {
    if (_bookChapters.Data.PrivilegeInfo > 0) {
        return _bookChapters.Data.PrivilegeInfo[_bookChapters.Data.PrivilegeInfo.length - 1];
    }
    else {
        return _bookChapters.Data.Chapters[_bookChapters.Data.Chapters.length - 1];
    }
}

export function GetIndexLastChapterLock(_bookChapters) {
    if (_bookChapters.Data.PrivilegeInfo.length > 0) {
        let cloneBI = JSON.parse(JSON.stringify(_bookChapters));

        for (let chapter of cloneBI.Data.Chapters.reverse()) {
            if (chapter.Id === _bookChapters.Data.PrivilegeInfo[0].Id) {
                return chapter.Index * 1 - 1;
            }
        }
    }

    return _bookChapters.Data.Chapters[_bookChapters.Data.Chapters.length - 1].Index;
}