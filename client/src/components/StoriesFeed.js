// StoriesFeed.js
import React from 'react';
import './StoriesFeed.css'; // Import CSS for StoriesFeed styling

const StoriesFeed = ({ stories, onDeviceSelect, onLike, onShare, onSubscribe, onComment }) => {
  return (
    <div className='stories-feed'>
      <h2>Stories Feed</h2>
      {stories.map((story) => (
        <div key={story.id} className='story-card'>
          <h3>{story.title}</h3>
          <p>{story.content}</p>
          <div className='story-actions'>
            <button onClick={() => onLike(story.id)} className='action-button like'>
              <span>Like</span>
            </button>
            <button onClick={() => onShare(story.id)} className='action-button share'>
              <span>Share</span>
            </button>
            <button onClick={() => onSubscribe(story.authorId)} className='action-button subscribe'>
              <span>Subscribe</span>
            </button>
            <button onClick={() => onComment(story.id)} className='action-button comment'>
              <span>Comment</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoriesFeed;
