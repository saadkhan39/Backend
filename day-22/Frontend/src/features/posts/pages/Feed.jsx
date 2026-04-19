import React, { useEffect } from "react";
import "../style/feed.scss";
import Post from "../components/Post";
import {usePost} from "../hook/usePost"
import Navbar from "../../../shared/components/Navbar";



const Feed = () => {

   const{feed,loading ,handleGetFeed,handleLike,handleUnLike} =usePost()

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
      <Navbar/>
      <div className="feed">
        <div className="posts">
          
            {feed.map((post,idx)=>{
                        return <Post key={idx} user={post.user} post={post} loading={loading} handleLike={handleLike}  handleUnLike={handleUnLike} />
                        
                    })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
