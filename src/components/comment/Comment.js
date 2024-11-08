import React from 'react';
import ReactMarkdown from 'react-markdown';
import { formatDistanceToNow } from 'date-fns';

const Comment = ({ comment }) => {
  const components = {
    img: ({ alt, src }) => <img alt={alt} src={src} style={{ maxWidth: '100%' }} />,
    a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  };

  const createdDate = new Date(comment.created_utc * 1000);

  if (isNaN(createdDate.getTime())) {
    return <div>Invalid date</div>;
  }

  // Function to check if the comment contains the word "gif" or "preview.redd.it"
  const containsDisallowedContent = (text) => { return text.toLowerCase().includes('gif') || text.toLowerCase().includes('preview.redd.it'); }; 
  
  // Skip rendering if the comment contains disallowed content 
  if (containsDisallowedContent(comment.body)) { return null; }

  return (
    <div className="comment">
      <ReactMarkdown components={components}>{comment.body}</ReactMarkdown>
      <div>
        <span>Comment by u/{comment.author}</span> · <span>{formatDistanceToNow(createdDate)} ago</span>
      </div>
    </div>
  );
};

export default Comment;
