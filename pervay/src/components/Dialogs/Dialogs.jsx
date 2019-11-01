import React from 'react';
import s from './Dialogs.module.css';
import Message from './Messages/Messages';
import Dialogs_item from './DialogItem/DialogItem';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let MassageElemnts = state.Messages.map( m => <Message message={m.messege}/>)             //исользуем масив з state для заполнения сообщений

   let DialogsElements = state.Dialog.map( d => <Dialogs_item name={d.name} id={d.id}/> )     // добавляєм діалог з другим пользов. и id

   let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {   
                              
        props.store.dispatch(sendMessageCreator());  
  }      

  let onNewMessageChange = (e) => {                                 
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
}                                                             
                                                     

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {DialogsElements}                                {/* добавляєм дані створені вище (імена) */}
            </div>      
            <div className={s.messages}>
               <div>{MassageElemnts} </div>                                 {/* добавляєм дані створені вище (повідомлення) */}
               <div> <textarea id={s.textInput} onChange={onNewMessageChange} value={newMessageBody}  placeholder="Сообщение..."></textarea>
                <button id={s.addPost} onClick={onSendMessageClick}>Add post</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;