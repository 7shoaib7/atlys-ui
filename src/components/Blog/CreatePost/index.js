import React, { useState } from 'react';
import './createPost.css';
import { CATEGORY_MAP } from '../../../constants/category';
import Button from '../../base/Button';

const CreatePost = ({handlePost}) => {
  const [postContent, setPostContent] = useState('');
  const [category, setCategory] = useState(0);

  const handleCategoryChange = () => {
    setCategory((category + 1) % 4);
  };

  const onClick = () => {
    if (postContent === '') {
      return;
    }

    handlePost(postContent, category);
    setPostContent('')
  };

  return (
    <div className='create-post'>
      <div className='create-post__title'>Create post</div>
      <div className='create-post__input'>
        <span className='create-post__input__category' onClick={handleCategoryChange}>
          {CATEGORY_MAP[category]}
        </span>
        <textarea
          className='create-post__input__textarea'
          placeholder='How are you feeling today?'
          rows={1}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>
      <div className='create-post__action'>
        <div className='create-post__action__post'>
          <Button
            text='Post'
            variant='primary'
            onClick={onClick}
            size='large'
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
