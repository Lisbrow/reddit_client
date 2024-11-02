import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import Subreddits from './components/subreddits/Subreddits';
import Feed from './components/feed/Feed';
import { fetchPosts, selectSelectedSubreddit } from './store/redditSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    console.log('Fetching posts for subreddit:', selectedSubreddit);
    dispatch(fetchPosts(selectedSubreddit));
  }, [dispatch, selectedSubreddit]);

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Subreddits />
        <Feed />
      </div>
    </div>
  );
};

export default App;
