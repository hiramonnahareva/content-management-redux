import { ADD_CONTENT } from "../actionTypes/actionTypes";

const contentCounter = (store) => (next) => (action) => {
    const state = store.getState();
    const contents = (state.content.content)
    if(action.type === ADD_CONTENT){
        const newAction = {
            ...action,
            payload: {...action.payload, contentPostion: contents.length},
        }
        return next(newAction);
    }
    return next(action);
}
export default contentCounter;