export function ceTagId(_tagName, _id, _translate) {
    return Object.assign(document.createElement(_tagName), {
        id: _id,
        translate: _translate
    });
}

export function ceNav(_obj) {
    let nav = Object.assign(document.createElement("nav"), {
        className: "navButton"
    });

    for (let ce of _obj)
        nav.append(ce);

    return nav;
}

export function ceInputButton(_value) {
    return Object.assign(document.createElement("input"), {
        className: "newButton",
        type: "button",
        value: _value
    });
}

export function ceInputNumber(_id, _value) {
    return Object.assign(document.createElement("input"), {
        id: _id,
        className: "newButton",
        type: "number",
        min: "1",
        value: _value
    });
}

export function ceInputCheckbox(_id) {
    return Object.assign(document.createElement("input"), {
        id: _id,
        className: "newButton",
        type: "checkbox",
        checked: false
    });
}