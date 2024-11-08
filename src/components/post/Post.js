import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { useDispatch } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill, BsChatFill } from "react-icons/bs";
import { toggleShowingComments, fetchComments } from "../../store/redditSlice";
import Comment from "../comment/Comment";

const Post = ({ post, index }) => {
  const dispatch = useDispatch();
  const [likes, setLikes] = useState(post.ups);
  const [dislikes, setDislikes] = useState(post.downs);

  const handleToggleComments = () => {
    if (!post.showingComments) {
      dispatch(fetchComments(index, post.permalink));
    }
    dispatch(toggleShowingComments(index));
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const components = {
    img: ({ alt, src }) => <img alt={alt} src={src} style={{ maxWidth: '100%' }} />,
    a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  };

  return (
    <div className="Post">
      <h3>{post.title}</h3>
      {post.selftext ? (
        <ReactMarkdown components={components}>{post.selftext}</ReactMarkdown>
      ) : (
        post.thumbnail && <img src={post.thumbnail} alt={post.title} />
      )}
      <div className="PostStats">
        <div className="Author">
          <span>Posted by u/{post.author}</span> ·{" "}
          <span>
            {formatDistanceToNow(new Date(post.created_utc * 1000))} ago
          </span>
        </div>
        <div className="LikesDislikes">
          <span><button onClick={handleLike}><BsFillHandThumbsUpFill className="SmallIcon" /></button>{likes}</span>
          <span><button onClick={handleDislike}><BsFillHandThumbsDownFill className="SmallIcon" /></button>{dislikes}</span>
          <span><button onClick={handleToggleComments}><BsChatFill className="SmallIcon" /></button>{post.num_comments}</span>
        </div>
      </div>
      <div className="ToggledComments">
        {post.showingComments && (
          <div>
            {post.comments.map((comment, i) => (
              <Comment key={i} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
