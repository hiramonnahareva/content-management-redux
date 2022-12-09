import { ADD_CONTENT, DELETE_CONTENT, LOAD_CONTENT } from "../actionTypes/actionTypes"

export const loadContent = (data) => {
    return{
        type: LOAD_CONTENT,
        payload: data,
    }
}
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