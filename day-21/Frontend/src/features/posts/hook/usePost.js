import { useContext } from "react"
import {getFeed} from "../service/post.api"
import { PostDataContext } from "../context/PostContext"


export const usePost=()=>{

    const context = useContext(PostDataContext)

    const{loading,setLoading,feed,setFeed,post,setPost} = context

    const handleGetFeed =async()=>{
         setLoading(true)
         const data = await getFeed()
         setFeed(data.posts)
         setLoading(false)
    }

    return {loading,feed,post,setPost,handleGetFeed}

}