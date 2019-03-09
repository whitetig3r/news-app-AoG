'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const { 
    dialogflow
} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({ debug: true });
const { topHeadlines } = require('./lib/NEWS_CRED');


app.intent('fetch news', (conv, { news_topic }) => {
    conv.data.newsTopic = news_topic;
    topHeadlines(news_topic).then(res => {
        if(res.totalResults > 0){
            conv.close(result.articles[0].title)
        }else{
            conv.close('No news on this subject!');
        }
    }).catch(err => {
        conv.close("There was an error in processing your response!");
    })
})

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);