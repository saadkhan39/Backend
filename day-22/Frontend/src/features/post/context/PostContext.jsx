import React, { createContext, useState } from 'react'

export const PostDataContext= createContext()

const PostContext = ({children}) => {
   
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState(null)
    const [feed, setFeed] = useState(null)

  return (
    <PostDataContext.Provider value={{loading,setLoading,post,setPost,feed,setFeed}}>
        {children}
    </PostDataContext.Provider>
  )
}

export default PostContext