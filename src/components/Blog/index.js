import React, { useState } from 'react'
import "./blog.css"
import { samplePosts } from '../../constants/sample'
import Post from './Post'
import CreatePost from './CreatePost'

import Modal from '../Modal'
import { useLogin } from '../../context/LoginContext'

const Blog = () => {
    const {currentUser,setShowModal,showModal} = useLogin();
    const [posts, setPosts] = useState(samplePosts)


    // console.log("post", posts)
    // console.log(currentUser)

    const handlePost = (postContent, category) => {
        if(currentUser?.id){
            const newPost = {
                id: Math.floor(100 * Math.random()),
                content: postContent,
                category,
                createdAt: new Date().toISOString(),
                author: {
                  id: currentUser.id,
                  name: currentUser.username,
                  avatar: currentUser.avatar ?? 'https://randomuser.me/api/portraits/women/43.jpg'
                },
                commentsCount: 0
              };
            
              setPosts([newPost, ...posts]);
        }
        else{
            // alert("please login first")
            setShowModal(true)
        }
      };
      

    return (
        <>
        <div className="blog">
            <div className='blog__content'>
                <h1 className='blog__content__title'>Hello </h1>
                <div className='blog__content__description'>
                    How are you doing today? Would you like to share something with the community 🤗
                </div>

                <div className='blog__content__posts'>
                    <CreatePost handlePost={handlePost} />
                    {
                        posts.map((post) => (
                            <Post key={post.id} {...post} />
                        ))
                    }
                </div>
            </div>
        </div>
        {showModal && <Modal />}
        </>
    )
}

export default Blog