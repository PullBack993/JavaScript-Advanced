function getArticleGenerator(articles) {
    let art = articles

    function showNext() {
        let output = document.getElementById('content')
        if (art[0] !== undefined){
            text = document.createElement("article")
            text.textContent = art.shift()
            output.appendChild(text)
        }
    }
    return showNext
}
