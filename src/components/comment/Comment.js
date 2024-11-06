import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const Comment = ({ comment }) => {
  return (
    <div className="Comment">
      <p>{comment.body}</p>
      <div>
        <span>Comment by u/{comment.author}</span> · <span>{formatDistanceToNow(new Date(comment.created_utc * 1000))} ago</span>
      </div>
    </div>
  );
};

export default Comment;
