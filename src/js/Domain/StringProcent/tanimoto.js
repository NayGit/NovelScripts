export default function tanimoto(s1, s2) {
    s1 = Array.from(s1.toLowerCase());
    s2 = Array.from(s2.toLowerCase());

    var a = s1.length;
    var b = s2.length;
    var c = 0;

    for (var sym of s1) {
        var index = s2.indexOf(sym);
        if (index > -1) {
            s2.splice(index, 1);
            c += 1;
        }
    }
    return c / (a + b - c)
}

//let diff = tanimoto(title, titleParser);