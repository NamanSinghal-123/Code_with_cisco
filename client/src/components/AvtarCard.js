import React from "react";
import './AvatarCard.css'; // Import the CSS file

const AvatarCard = () => {
  const posts = [
    {
      username: "Node1",
      caption: "Caption1",
      deviceImage: 'https://unsplash.com/photos/black-flat-screen-tv-on-white-wooden-table-SVpWtjXmLZg'
    },
    {
      username: "Node2",
      caption: "Caption2",
      deviceImage: 'https://unsplash.com/photos/a-black-and-white-drawing-of-a-landscape-_qL-OGpBOds'

    }
    // Add more posts as needed
  ];

  return (
    <div className="avatar-card">
      {posts.map((post, postIndex) => (
        <div key={postIndex} className="post">
          {/* Example Post */}
          <div className="post-header">
            <div>
              <p className="username">{post.username}</p>
              <p className="caption">{post.caption}</p>
            </div>
          </div>

          {/* Device Image */}
          <div className="device-image-container">
            <img
              className="device-image"
              src={post.deviceImage}
              alt={`Device ${postIndex + 1}`}
            />
          </div>

          {/* Like, Comment, Share Buttons */}
          <div className="post-actions">
            <button className="like-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Like icon SVG */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span>Like</span>
            </button>
            <button className="comment-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Comment icon SVG */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span>Comment</span>
            </button>
            <button className="share-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Share icon SVG */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9l-7 7-7-7"
                />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvatarCard;
