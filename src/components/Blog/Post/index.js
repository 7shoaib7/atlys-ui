import moment from 'moment';
import chat from "../../../assets/images/chat.svg"
import './post.css';
import { CATEGORY_MAP } from '../../../constants/category';

const Post = ({ author, createdAt, category, content, commentsCount }) => {
    return (
        <div className='post'>
            <div className='post__author'>
                <img className='post__author__avatar' src={author.avatar} alt="post-avatar"/>
                <div className='post__author__details'>
                    <div className='post__author__details__name'>{author.name}</div>
                    <div className='post__author__details__time'>{moment(createdAt).fromNow()}</div>
                </div>
                <div className='post__author__menu'>...</div>
            </div>

            <div className='post__content'>
                <span className='post__content__category'>
                    {CATEGORY_MAP[category]}
                </span>
                <span className='post__content__text'>
                    {content}
                </span>
            </div>

            <div className='post__footer'>
                <div className='post__footer__comments'>
                    <img src={chat} alt="chat"/>
                    <span>{commentsCount} comments</span>
                </div>
            </div>
        </div>
    );
};

export default Post;