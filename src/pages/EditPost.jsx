import React,{useState, useEffect} from 'react'
import {Container, PostForm} from '../component'
import appwriteService from '../appwrite/config'
import { useParams, useNavigate } from 'react-router-dom'
function EditPost() {
const [post, setPosts] = useState(null)
const {slug} = useParams()
const naviagte = useNavigate()

useEffect(()=>{
if(slug){
    appwriteService.getPost(slug).then((post)=>{
        if(post){
            setPosts(post)
        }
    })
}
},[slug, naviagte])

  return post ? (
    <div className='py-8'>
        <PostForm post={post}/>
    </div>
  ) : null
}

export default EditPost