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

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export function getCatalog(_json, _loc) {
    let chId = glavaWebNovel(_loc);

    var tmpChList = new Array();
    var tmpFlag = false;

    if (_loc.href.endsWith('/catalog'))
        tmpFlag = true;

    for (let volume of _json.data.volumeItems) {
        for (let chapter of volume.chapterItems) {
            if (tmpFlag)
                tmpChList.push([chapter.chapterIndex, chapter.chapterId, chapter.chapterName, chapter.publishTimeFormat, chapter.isAuth, chapter.chapterLevel]); //isAuth=1 в свободном, chapterLevel=0 --> за монеты, chapterLevel>0 закрытые
            else if (chId == chapter.chapterId)
                tmpFlag = true;
        }
    }

    return tmpChList;
}

// Удалить???
export async function downloadCatalog(bookId, chId) {
    var tmpChList = new Array();
    var tmpFlag = false;

    if (location.href.endsWith('/catalog'))
        tmpFlag = true;

    let url = 'https://m.webnovel.com/book/' + bookId + '/catalog';
    await fetch(url)
        .then(res => fetchStatusHTML(res))
        .then(data => {
            var chObj = data.getElementById('__NEXT_DATA__').textContent;

            var chJson = JSON.parse(chObj);
            console.log(chJson);

            var chList = chJson.props.initialState.entities.chapter;
            console.log(chList);

            for (var ch in chList) {
                if (tmpFlag)
                    tmpChList.push([chList[ch].chapterIndex, chList[ch].chapterId, chList[ch].chapterName, chList[ch].publishTimeFormat, chList[ch].isAuth, chList[ch].chapterLevel]); //isAuth=1 в свободном, chapterLevel=0 --> за монеты, chapterLevel>0 закрытые
                else if (chId == chList[ch].chapterId)
                    tmpFlag = true;
            }
            console.log(tmpChList);
        })
        .catch(err => fetchCatch(err, url));

    return tmpChList;
}

// Удалить???
export function Title() {
    let title = document.title;
    console.log(title);

    let result = title.match(/(.+)\sChapter\s(\d+)\s-\s(.+)/);

    if (result.length === 4) {
        console.log(result[1]);     // Script (первые скобки)
        console.log(result[2]);     // Script (2 скобки)
        console.log(result[3]);     // Script (3 скобки)
        console.log(result.length); // 4
    }
    else {
        console.log('Где глава???');
    }

    return result;
}