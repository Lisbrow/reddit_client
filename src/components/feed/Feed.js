import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../post/Post';
import { selectFilteredPosts } from '../../store/redditSlice';

const Feed = () => {
  const posts = useSelector(selectFilteredPosts);

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
