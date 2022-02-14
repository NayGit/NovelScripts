export function linkWebNovel() {
    let loc = location;

    console.log(loc.href);

    if (loc.pathname.split('/').length == 4) {
        window.open('https://m.ficool.com/book/' + bookWebNovel(loc) + '/' + glavaWebNovel(loc), "_blank");
        //window.open('https://translate.google.com/translate?sl=auto&tl=ru&u=https://m.ficool.com/book/' + bookWebNovel(loc) + '/' + glavaWebNovel(loc), "_blank");
        //location.replace('https://translate.google.com/translate?sl=auto&tl=ru&u=https://m.ficool.com/book/' + bookWebNovel(loc) + '/' + glavaWebNovel(loc));
    }
}

var s1 = document.createElement("input");
s1.type = "button";
s1.value = "OpenLink";
s1.addEventListener('click', function () {
    linkWebNovel();
});
d.append(s1);


/////////////////////////


var s5 = document.createElement("input");
s5.type = "button";

if (allCH[0][4] == 1) {
    s5.value = "Hide";
    s5.addEventListener('click', function () {
        document.getElementById("divPanel").hidden = true;
    });
}
else if (allCH[0][5] == 0) {
    var tmpFC = 0;
    for (tmpFC; tmpFC < allCH.length - 1; tmpFC++) {
        if (allCH[tmpFC][5] > 0) {
            break;
        }
    }

    s5.value = "FC = " + tmpFC;
    s5.addEventListener('click', function () {
        //window.open('https://m.ficool.com/book/' + tmpB + '/' + allCH[0][1]);

        let chInt = Number(result[2]) + 1;
        window.open(ReadFree[1] + result[1].replace(' ', '-') + '_' + chInt + '.html');
    });
}
else {
    s5.value = "openBlock: " + allCH.length;
    s5.addEventListener('click', function () {
        for (var i = 0; i < allCH.length; i++) {
            //window.open('https://translate.google.com/translate?sl=auto&tl=ru&u=https://m.ficool.com/book/' + tmpB + '/' + allCH[i][1]);
            window.open('https://m.ficool.com/book/' + tmpB + '/' + allCH[i][1]);

            if (i == 2 && allCH.length - 1 > 5) {
                location.replace('https://m.webnovel.com/book/' + tmpB + '/' + allCH[i][1]);
                break;
            }
            if (i == allCH.length - 1) {
                location.replace('https://m.webnovel.com/book/' + tmpB + '/' + allCH[i][1]);
            }
        }
    });
}
d.append(s5);



///////////////////