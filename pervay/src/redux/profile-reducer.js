const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 4, messege: state.newPostText, likesCounts: 0 };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_TEXT_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreatot = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreatot = (text) => {
    return {
        type: UPDATE_NEW_TEXT_POST, newText: text
    }
}

export default profileReducer;