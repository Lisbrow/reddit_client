import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../post/Post';
import { selectFilteredPosts } from '../../store/redditSlice';

const Feed = () => {
  console.log('Feed Component Loaded'); // Debugging
  const posts = useSelector(selectFilteredPosts);
  console.log(posts); // Check if posts are populated

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
