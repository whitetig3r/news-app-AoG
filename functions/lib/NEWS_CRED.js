const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('8ae75405fee04ac4894375d280458eff');

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