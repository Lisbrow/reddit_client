import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Post from '../post/Post';
import { selectFilteredPosts, selectError } from '../../store/redditSlice';

const Feed = () => {
  const posts = useSelector(selectFilteredPosts);
  const error = useSelector(selectError);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (posts.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  }, [posts]);

  if (error) {
    return <div>Error loading posts. Please try again later.</div>;
  }

  return (
    <div className="Feed">
      {noResults && <div className="NoResults"><h3>Couldn't find what you are looking for</h3></div>}
      {posts.map((post, index) => (
        <Post key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};

export default Feed;
