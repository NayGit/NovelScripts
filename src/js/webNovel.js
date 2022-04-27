import { fetchStatusHTML, fetchStatusJSON, fetchCatch } from './domain';

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
    let url = _loc.origin + '/go/pcm/chapter/get-chapter-list?bookId=' + bookWebNovel(_loc) + '&_csrfToken=' + getCookie("_csrfToken");;

    return await fetch(url)
        .then(res => fetchStatusJSON(res))
        .then(data => {
            return data;
        })
        .catch(err => fetchCatch(err, url));
}

export function GetChapterId(_bookInfo, _cId) {
    for (let volume of _bookInfo.data.volumeItems) {
        for (let chapter of volume.chapterItems) {
            if (chapter.chapterId === _cId) {
                return chapter;
            }
        }
    }
}

export function GetChapterLevel(_bookInfo, _cLevel) {
    let cloneBI = JSON.parse(JSON.stringify(_bookInfo));

    for (let volume of cloneBI.data.volumeItems.reverse()) {
        for (let chapter of volume.chapterItems.reverse()) {
            if (chapter.chapterLevel === _cLevel) {
                return chapter;
            }
        }
    }
}