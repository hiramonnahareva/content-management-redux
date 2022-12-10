import { READ_CONTENT, DELETE_CONTENT, GET_CONTENT, ADD_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const loadContent = (data) => {
    return{
        type: GET_CONTENT,
        payload: data,
    }
}
export const addContent = (content) => {
    return{
        type: ADD_CONTENT,
        payload: content,
    };
}
export const readHistory = (content) => {
    return{
        type: READ_CONTENT,
        payload: content,
    };
}
export const deleteContent = (id) => {
    return{
        type: DELETE_CONTENT,
        payload: id,
    };
}
export const updateContent = (id, content) => {
    return{
        type: UPDATE_CONTENT,
        payload: id, content,
    };
}