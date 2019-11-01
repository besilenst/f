import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.posts}>
            <img src='https://klike.net/uploads/posts/2019-03/1551511862_28.jpg' />
            {props.massege}
          <div>
                <span>like {props.likesCounts}</span>
            </div>
        </div>


    )

}

export default Post;