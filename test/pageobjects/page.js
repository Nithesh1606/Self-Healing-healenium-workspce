class Page {

    open() {
        return browser.url(`https://elenastepuro.github.io/test_env/index.html`)
    }
}

module.exports = Page;