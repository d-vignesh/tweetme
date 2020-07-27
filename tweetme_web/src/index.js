import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {TweetsComponent, TweetDetailComponent, FeedComponent} from './tweets'
import {ProfileBadgeComponent} from './profiles'

const appEle = document.getElementById('root')
if (appEle) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    appEle
  );
}

const e = React.createElement
const TweetsEle = document.getElementById('tweetme')
if (TweetsEle) {  
  ReactDOM.render(
    e(TweetsComponent, TweetsEle.dataset),
    TweetsEle
  );
}

const TweetsFeedEle = document.getElementById('tweetme-feed')
if (TweetsFeedEle) {  
  ReactDOM.render(
    e(FeedComponent, TweetsFeedEle.dataset),
    TweetsFeedEle
  );
}

const tweetDetailElements = document.querySelectorAll('.tweetme-detail')
tweetDetailElements.forEach(container => {
  ReactDOM.render(
    e(TweetDetailComponent, container.dataset),
    container
  );
})

const userProfileBadgeElements = document.querySelectorAll('.tweetme-profile-badge')
userProfileBadgeElements.forEach(container => {
  ReactDOM.render(
    e(ProfileBadgeComponent, container.dataset),
    container
  );
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
