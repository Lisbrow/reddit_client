import React from 'react';
import Header from './components/header/Header';
import Subreddits from './components/subreddits/Subreddits';
import Feed from './components/feed/Feed';
import './App.css';

const App = () => {
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