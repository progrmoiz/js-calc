window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

const app = $("#app");
const output = $("#output");
const t = $("#calc-html");

const div = document.createElement("div");
div.innerHTML = t.innerHTML;

const s = () => {
    const ss = div.querySelector("#operation").cloneNode(true);
    ss.addEventListener("change", handleInputEvt);

    return ss;
}
const i = () => {
    const ii = div.querySelector("#number").cloneNode(true);
    ii.addEventListener("input", handleInputEvt);

    return ii;
}

const handleFocusEvt = (e) => {
    e.target.removeEventListener(e.type, handleFocusEvt);

    const inputEle = i();
    inputEle.addEventListener("focus", handleFocusEvt);

    app.appendChild(s())
    app.appendChild(inputEle);
};

const handleInputEvt = () => {
    let st = "";

    Array.from(app.children)
    .forEach((e) => st += e.value);

    output.textContent = eval(st.match(/\b[\d\W]+\b/g)[0]);
}

app.appendChild(i());
app.appendChild(s());
app.appendChild((() => {
    const tt = i();
    tt.addEventListener("focus", handleFocusEvt);

    return tt;
})());

