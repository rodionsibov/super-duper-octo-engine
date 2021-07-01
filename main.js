function minifyHtml(type, input, output) {
    output.value = input.value
        .replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g, '')
        .replace(/\>\s*\</g, '><');
}

document.querySelector("#htmlMinify").addEventListener("click", function () {
    minifyHtml(
        this.innerHTML, document.querySelector('textarea')[0], document.querySelector('textarea')[1]
    );
}, false);