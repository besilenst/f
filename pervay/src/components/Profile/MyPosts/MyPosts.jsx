import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreatot, addPostActionCreatot } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

  let Postes = props.postsData.map(p => <Post massege={p.messege} likesCounts={p.likesCounts} />)

  let newPostElement = React.createRef();

  let onClickBatton = () => {
    props.dispatch(addPostActionCreatot());
  }

  let onPostChange = () => {
    let text= newPostElement.current.value;
    let action =updateNewPostTextActionCreatot(text);
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea id={s.textInput} onChange={onPostChange}  ref={newPostElement} value={props.newPostText} placeholder="Сообщение..." rows="3"></textarea>
        <button id={s.addPost} onClick={onClickBatton}>Add post</button>

      </div>
      <div className={s.posts}>
        {Postes}
      </div>
    </div>
  )
}

export default MyPosts;