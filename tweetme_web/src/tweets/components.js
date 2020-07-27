import React, {useState, useEffect} from 'react'

import {TweetsList} from './list'
import {TweetCreate} from './create'
import {apiTweetDetail} from './lookup'
import {Tweet} from './detail'
import {FeedList} from './feed'

export function FeedComponent(props) {

  const [newTweets, setNewTweets] = useState([])
  const canTweet = props.canTweet === 'false' ? false : true 

  const handleNewTweet = (newTweet) => {
    let tempNewTweets = [...newTweets]
    tempNewTweets.unshift(newTweet)
    setNewTweets(tempNewTweets)
  }

  return <div className={props.className}>
    {canTweet === true && <TweetCreate className='col-12 mb-3' didTweet={handleNewTweet} /> }
    <FeedList newTweets={newTweets} {...props}/>
  </div> 
}

export function TweetsComponent(props) {

  const [newTweets, setNewTweets] = useState([])
  const canTweet = props.canTweet === 'false' ? false : true 

  const handleNewTweet = (newTweet) => {
    let tempNewTweets = [...newTweets]
    tempNewTweets.unshift(newTweet)
    setNewTweets(tempNewTweets)
  }

  return <div className={props.className}>
    {canTweet === true && <TweetCreate className='col-12 mb-3' didTweet={handleNewTweet} /> }
    <TweetsList newTweets={newTweets} {...props}/>
  </div> 
}
  
export function TweetDetailComponent(props) {
  const {tweetId} = props 
  const [didLookup, setDidLookup] = useState(false)
  const [tweet, setTweet] =  useState(null)

  const handleBackendLookup = (response, status) => {
    if (status === 200) {
      setTweet(response)
    }
    else {
      alert('An error occured when finding your tweet')
    }
  }

  useEffect(() => {
    if (didLookup === false) {
      apiTweetDetail(tweetId, handleBackendLookup)
      setDidLookup(true)
    }
  }, [didLookup, setDidLookup, tweetId])

  return tweet === null ? null : <Tweet tweet={tweet} className={props.className}/>
}
  