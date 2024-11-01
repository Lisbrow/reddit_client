import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setSelectedSubreddit } from '../../store/redditSlice';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector((state) => state.reddit.selectedSubreddit);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchInput));
  };

  const handleFilterChange = (filter) => {
    const subredditWithFilter = `${selectedSubreddit}${filter}`;
    dispatch(setSelectedSubreddit(subredditWithFilter));
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
        <button onClick={() => handleFilterChange('/hot')}>Hot</button>
        <button onClick={() => handleFilterChange('/new')}>New</button>
        <button onClick={() => handleFilterChange('/top')}>Top</button>
        <button onClick={() => handleFilterChange('/rising')}>Rising</button>
      </div>
    </header>
  );
};

export default Header;
