import React from "react";

const Post = ({user,post}) => {
  return (
      <div className="post">
        <div className="user">
          <img
            src={user.profileImage}
            alt=""
          />
          <p>{user.username}</p>
        </div>
        <img
        src={post.imgUrl}
          alt=""
        />
        <div className="bottom">
          <div className="icons">
            <div className="left">
              <button>
                <i className={`${post.isLiked ? "like ri-heart-fill" : "ri-heart-line"}`}></i>
              </button>
              <button>
                <i className="ri-chat-3-line"></i>
              </button>
              <button>
                <i className="ri-share-forward-line"></i>
              </button>
            </div>
            <div className="right">
              <button>
                <i className="ri-bookmark-line"></i>
              </button>
            </div>
          </div>
          <h5>{user.username}</h5>
          <p className="caption">{post.caption} </p>
        </div>
      </div>
  );
};

export default Post;
