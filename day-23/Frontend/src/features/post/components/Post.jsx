import React from 'react'

const Post = ({user,post,handleLike,handleUnLike}) => {

    
  return (
     <div className="post">
                    <div className="user">
                        <div className="img-wrapper">
                            <img src={user.profileImage} alt="" />
                        </div>
                        <p>{user.username}</p>
                    </div>
                    <img src={post.imgUrl} alt="" />
                    <div className="icons">
                        <div className="left">
                            <button><i onClick={()=>{
                                post.isLiked?handleUnLike(post._id):handleLike(post._id)
                            }} className={post.isLiked?"ri-heart-fill fill-heart":"ri-heart-line"}></i></button>
                        <button><i className="ri-chat-3-line"></i></button>
                        <button><i className="ri-share-forward-line"></i></button>
                        </div>
                        <div className="right">
                            <button><i className="ri-bookmark-line"></i></button>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>{user.username}</p>
                        <p>{post.caption}</p>
                    </div>
                </div>
  )
}

export default Post