import React, { useState } from 'react'
import "./blog.css"
import { samplePosts } from '../../constants/sample'
import Post from './Post'
import CreatePost from './CreatePost'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

const Blog = ({currentUser}) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState(samplePosts)

    // console.log("post", posts)

    const handlePost = (postContent, category) => {
        if (!currentUser?.id) {
            navigate(ROUTES.LOGIN, { state: { previousLocation: ROUTES.BLOG } });
            return;
          }

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
      };
      

    return (
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
    )
}

export default Blog