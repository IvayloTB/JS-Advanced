function getArticleGenerator(articles) {
    const divContent = document.getElementById('content');
    return function showNext(){

        if(articles.length !== 0){
            let article = document.createElement('article');
            article.textContent = articles.shift();
            divContent.appendChild(article);
        }
    }
}
