import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { formatDistanceToNow } from 'date-fns';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const Comment = ({ comment, showing }) => {
  const [slideId, setSlideId] = useState("SlideDown");

  useEffect(() => {
    if (showing) {
      setSlideId("SlideDown");
    } else {
      setSlideId("SlideUp");
    }
  }, [showing]);

  const components = {
    img: ({ alt, src }) => <img alt={alt} src={src} style={{ maxWidth: '100%' }} />,
    a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  };

  const createdDate = new Date(comment.created_utc * 1000);

  if (isNaN(createdDate.getTime())) {
    return <div>Invalid date</div>;
  }

  const containsGifWord = (text) => text.toLowerCase().includes('gif');

  if (containsGifWord(comment.body)) {
    return null;
  }

  return (
    <div id={slideId} className="Comment">
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm, remarkBreaks]}>{comment.body}</ReactMarkdown>
      <div className="CommentStats">
        <span className="Author">u/{comment.author}</span>
        <span className="Break"> || </span>
        <span className="TimeAgo">{formatDistanceToNow(createdDate)} ago</span>
      </div>
    </div>
  );
};

export default Comment;
