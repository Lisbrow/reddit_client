import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setSelectedSubreddit, fetchPosts } from '../../store/redditSlice';
import { selectSelectedSubreddit } from '../../store/redditSlice';
import { FaReddit } from 'react-icons/fa';

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
    <div className="Header">
      <div className="Logo">
      <h1><FaReddit className="Icon" /> Readdit</h1>
      </div>
      <div className="SearchBar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="Buttons">
        <button onClick={() => handleButtonClick('/r/popular')}>Popular</button>
        <button onClick={() => handleButtonClick('/r/rising')}>Rising</button>
        <button onClick={() => handleButtonClick('/r/all')}>All</button>
      </div>
    </div>
  );
};

export default Header;
