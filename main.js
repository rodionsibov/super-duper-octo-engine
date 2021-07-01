const inputEl = document.querySelectorAll('textarea')[0]
const outputEl = document.querySelectorAll('textarea')[1]

function minifyHtml(type, input, output) {
    output.value = input.value
        .replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g, '')
        .replace(/\>\s*\</g, '><');
}

document.querySelector("#htmlMinify").addEventListener("click", function () {
    minifyHtml(this.innerHTML, inputEl, outputEl);
    document.querySelector("#inputInfo").textContent = inputEl.value.length
    document.querySelector("#outputInfo").textContent = outputEl.value.length
    outputEl.addEventListener("focus", function () {
        this.select();
    })
}, false);
