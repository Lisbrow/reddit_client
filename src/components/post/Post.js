import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import {
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
  BsChatFill,
} from "react-icons/bs";
import { toggleShowingComments, fetchComments } from "../../store/redditSlice";
import Comment from "../comment/Comment";

const Post = ({ post, index }) => {
  const dispatch = useDispatch();
  const [likes, setLikes] = useState(post.ups);
  const [dislikes, setDislikes] = useState(post.downs);
  const loadingComments = useSelector(state => state.reddit.posts[index].loadingComments);

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

  // Function to check if the URL is an image
  const isImageUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png|webp)$/i);
  };

  // Function to check if the URL is a video
  const isVideoUrl = (url) => {
    return url.match(/\.(mp4|webm|ogg)$/i) || url.includes("v.redd.it");
  };

  // Function to get video URL from various fields
  const getVideoUrl = (post) => {
    if (post.media && post.media.reddit_video && post.media.reddit_video.fallback_url) {
      return post.media.reddit_video.fallback_url;
    }
    if (post.secure_media && post.secure_media.reddit_video && post.secure_media.reddit_video.fallback_url) {
      return post.secure_media.reddit_video.fallback_url;
    }
    if (post.fallback_url && isVideoUrl(post.fallback_url)) {
      return post.fallback_url;
    }
    if (post.url && isVideoUrl(post.url)) {
      return post.url;
    }
    return null;
  };

  const videoUrl = getVideoUrl(post);

  const components = {
    img: ({ alt, src }) => (
      <img
        alt={alt}
        src={src}
        style={{ maxWidth: "100%" }}
      />
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  };

  return (
    <div className="Post">
      <h4>r/{post.subreddit}</h4>
      <h2>{post.title}</h2>
      <div className="PostContent">
      {post.url && isImageUrl(post.url) && (
        <img src={post.url} alt={post.title} />
      )}
      {videoUrl && (
        <video controls preload="metadata">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {!post.url && !videoUrl && post.thumbnail && (
        <img src={post.thumbnail} alt={`${post.title} thumbnail`} />
      )}
      {post.selftext && (
        <ReactMarkdown components={components}>{post.selftext}</ReactMarkdown>
      )}
      </div>
      <div className="PostStats">
        <div>
          <span className="Author">u/{post.author}</span>
          <span className="Break"> || </span>
          <span className="TimeAgo">{formatDistanceToNow(new Date(post.created_utc * 1000))} ago
          </span>
        </div>
        <div className="LikesDislikes">
          <span>
            <button onClick={handleLike}>
              <BsFillHandThumbsUpFill className="SmallIcon" />
            </button>
            {likes}
          </span>
          <span>
            <button onClick={handleDislike}>
              <BsFillHandThumbsDownFill className="SmallIcon" />
            </button>
            {dislikes}
          </span>
          <span>
            <button onClick={handleToggleComments}>
              <BsChatFill className="SmallIcon" />
            </button>
            {post.num_comments}
          </span>
        </div>
      </div>
      <div>
        {post.showingComments && (
          <div className="ToggledComments">
            {loadingComments ? (
              <div className="Loading">Loading comments...</div>
            ) : (
              post.comments.map((comment, i) => (
                <Comment
                  key={i}
                  comment={comment}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;