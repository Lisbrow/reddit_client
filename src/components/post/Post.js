import React from 'react';
import { useDispatch } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import { toggleShowingComments, fetchComments } from '../../store/redditSlice';
import Comment from '../comment/Comment';

const Post = ({ post, index }) => {
  const dispatch = useDispatch();

  const handleToggleComments = () => {
    if (!post.showingComments) {
      dispatch(fetchComments(index, post.permalink));
    }
    dispatch(toggleShowingComments(index));
  };

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.selftext}</p>
      <div>
        <span>Posted by u/{post.author}</span> · <span>{formatDistanceToNow(new Date(post.created_utc * 1000))} ago</span>
      </div>
      <div>
        <span>👍 {post.ups}</span>
        <span>👎 {post.downs}</span>
        <span>💬 {post.num_comments}</span>
      </div>
      <button onClick={handleToggleComments}>
        {post.showingComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {post.showingComments && (
        <div className="comments">
          {post.comments.map((comment, i) => (
            <Comment key={i} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
