import { READ_CONTENT, DELETE_CONTENT, GET_CONTENT, ADD_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    content: [],
};

const contentReducer = (state = initialState, action) =>{
    const clickContent =  state.content.find((content) => content._id === action.payload._id);
    switch (action.type){
        case GET_CONTENT: {
            return {
                ...state,
                contents: action.payload,
            }
        }
        case ADD_CONTENT: {
            return {
                ...state,
                contents: [...state.content, action.payload],
            }
        }
        case READ_CONTENT: 
        if(clickContent){
            return state;
        }
        return {
            ...state,
            content: [...state.content, action.payload]
        };
        case UPDATE_CONTENT: 
        if(clickContent){
            return state;
        }
        return {
            ...state,
            content: [...state.content, action.payload]
        };
        case DELETE_CONTENT: 
        return {
            ...state,
            content: state.content.filter((content) => content._id !== action.payload._id), 
        };
        default: 
        return state;
    }
} 
export default contentReducer;