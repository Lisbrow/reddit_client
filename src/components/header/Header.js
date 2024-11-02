import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setSelectedSubreddit, fetchPosts } from '../../store/redditSlice';
import { selectSelectedSubreddit } from '../../store/redditSlice';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchInput));
  };

  const handleButtonClick = (subreddit) => {
    dispatch(setSelectedSubreddit(subreddit));
    dispatch(fetchPosts(subreddit));
  };

  return (
    <header>
      <h1>Reddit Client</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <button onClick={() => handleButtonClick('/r/popular')}>Popular</button>
        <button onClick={() => handleButtonClick('/r/rising')}>Rising</button>
        <button onClick={() => handleButtonClick('/r/all')}>All</button>
      </div>
    </header>
  );
};

export default Header;
