import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import siedebarReducer from "./siedebar-reducer";

let store = {

    _state: {
        profilePage: {
            postsData: [
                { id: 1, messege: "Fack you niger!", likesCounts: 12 },
                { id: 2, messege: "no fack you!", likesCounts: 2 },
                { id: 3, messege: "Oy may gooood!", likesCounts: 21 }],
            newPostText: ' '
        },

        dialogsPage: {

            Dialog: [
                { id: 1, name: '"Oleh"' },
                { id: 2, name: "OFaseh" }],
            Messages: [
                { id: 1, messege: "Hiqew" },
                { id: 2, messege: "Lidsa asd" }],
            newMessageBody: ' '
        },
        sidebar: {}

    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('sava');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = siedebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}





export default store;
window.store = store;
