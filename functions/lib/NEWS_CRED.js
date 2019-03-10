const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(YOUR_API_KEY);

function topHeadlines(q){
    return new Promise( (res,rej) => {
        newsapi.v2.topHeadlines({
            q: `${q}`
        }).then(response => {
            res(response);
        })
        .catch(err => {
            rej(err);
        });
    });
}

module.exports = {
    topHeadlines
}
