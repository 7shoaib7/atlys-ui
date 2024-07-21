import React, { useState } from 'react'
import "./blog.css"
import { samplePosts } from '../../constants/sample'
import Post from './Post'
import CreatePost from './CreatePost'

import Modal from '../Modal'
import { useLogin } from '../../context/LoginContext'
import { logout } from '../../services/auth'
import { ROUTES } from '../../constants/routes'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
    const { currentUser,setCurrentUser, setShowModal, showModal } = useLogin();
    const [posts, setPosts] = useState(samplePosts)
    const navigate = useNavigate()


    // console.log("post", posts)
    // console.log(currentUser)

    const handlePost = (postContent, category) => {
        if (currentUser?.id) {
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
        else {
            // alert("please login first")
            setShowModal(true)
        }
    };


    const handleLogout = ()=>{
          logout()
          setCurrentUser(null)
    }

    return (
        <>
            <div className="blog">
                <div className='blog__content'>
                    <h1 className='blog__content__title'>Hello {currentUser?.username ?? 'Guest'}</h1>
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
                {
                    currentUser?.id &&
                    <div className='blog__logout' onClick={handleLogout}>Logout</div>
                }
            </div>
            {showModal && <Modal />}
        </>
    )
}

export default Blog