import React, { useEffect } from "react";
import "../style/feed.scss";
import Post from "../components/Post";
import {usePost} from "../hook/usePost"

const Feed = () => {

   const{feed,loading ,handleGetFeed} =usePost()

   useEffect(()=>{
      handleGetFeed()
   },[])

   if(loading || !feed){
    return(
      <main>
        <h1>Feed is Loading...</h1>
      </main>
    )
   }

   console.log(feed);
   

  return (
    <div className="feed-page">
      <div className="feed">
        <div className="posts">
          <h1 className="insta-text">Instagram</h1>
            {feed.map((post,idx)=>{
                        return <Post key={idx} user={post.user} post={post}  />
                        
                    })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
