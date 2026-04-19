import { useContext, useEffect } from "react"
import {getFeed, createPost, likePost, unlikePost} from "../service/post.api"
import { PostDataContext } from "../context/PostContext"


export const usePost=()=>{

    const context = useContext(PostDataContext)

    const{loading,setLoading,feed,setFeed,post,setPost} = context

    useEffect(()=>{
        handleGetFeed()
    },[])

    const handleGetFeed =async()=>{
         setLoading(true)
         const data = await getFeed()
         setFeed(data.posts.reverse())
         setLoading(false)
    }

    const handleCreatePost = async (imageFile,caption)=>{
        setLoading(true)
        const data = await createPost(imageFile,caption)
        setFeed([data.post,...feed])
        setLoading(false)
    }

    const handleLike = async (post) => {
        const data = await likePost(post)
        await handleGetFeed()
    }
    const handleUnLike = async (post) => {
        const data = await unlikePost(post)
        await handleGetFeed()
    }

    return {loading,feed,post,setPost,handleGetFeed,handleCreatePost ,handleLike,handleUnLike}

}