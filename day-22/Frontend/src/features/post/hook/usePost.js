import { useContext, useEffect } from "react"
import { PostDataContext } from "../context/PostContext"
import { getFeed ,createPost, likePost, unLikePost } from "../service/post.api"



export const usePost =()=>{

    const context = useContext(PostDataContext)

    const {loading,setLoading,post,setPost,feed,setFeed} = context

    useEffect(()=>{
        handleGetFeed()
    },[])

    const handleGetFeed =async()=>{
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts.reverse())
        setLoading(false)
    } 

    const handleCreatePost= async (imageFile,caption) => {
        setLoading(true)
        const data = await createPost(imageFile,caption)
        setFeed([data.post,...feed])
        setLoading(false)
    }

    const handleLike = async (post) => {
        const data = await likePost(post)
        handleGetFeed()
    }
    const handleUnLike = async (post) => {
        const data = await unLikePost(post)
        handleGetFeed()
    }

    return { handleGetFeed ,loading, post ,feed ,handleCreatePost ,handleLike,handleUnLike }
}