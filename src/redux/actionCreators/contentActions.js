import { ADD_CONTENT, DELETE_CONTENT } from "../actionTypes/actionTypes"

export const addContent = (content) => {
    return{
        type: ADD_CONTENT,
        payload: content,
    };
}
export const deleteContent = (content) => {
    return{
        type: DELETE_CONTENT,
        payload: content,
    };
}