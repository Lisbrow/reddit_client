import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../post/Post';
import { selectFilteredPosts, selectError } from '../../store/redditSlice';

const Feed = () => {
  const posts = useSelector(selectFilteredPosts);
  const error = useSelector(selectError);

  if (error) {
    return <div>Error loading posts. Please try again later.</div>;
  }

  return (
    <div className="feed">
      {posts.map((post, index) => (
        <Post key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};

export default Feed;
