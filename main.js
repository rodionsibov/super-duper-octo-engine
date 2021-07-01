function minifyHtml(type, input, output) {
    output.value = input.value
        .replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g, '')
        .replace(/\>\s*\</g, '><');
}

document.querySelector("#htmlMinify").addEventListener("click", function () {
    minifyHtml(
        this.innerHTML, document.querySelectorAll('textarea')[0], document.querySelectorAll('textarea')[1]
    );
}, false);