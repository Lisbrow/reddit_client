import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits } from '../../store/subredditSlice';
import { setSelectedSubreddit } from '../../store/redditSlice';

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <div className="Subreddits">
      <h2>Popular Subreddits</h2>
      <ul>
        {subreddits.slice(0, 20).map((subreddit) => (
          <li key={subreddit.id}>
            <button 
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
            >
              {subreddit.display_name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subreddits;
