import { ADD_CONTENT, DELETE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    content: [],
};

const productReducer = (state = initialState, action) =>{
    const clickContent =  state.content.find((content) => content._id === action.payload._id);
    switch (action.type){
        case ADD_CONTENT: 
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
            content: state.content.filter((product) => product._id =! action.payload._id), 
        };
        default: 
        return state;
    }
} 
export default productReducer;