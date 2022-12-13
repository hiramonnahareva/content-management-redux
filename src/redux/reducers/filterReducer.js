import { TOGGLE_CATEGORY, TOGGLE_FIRST_UPLOAD } from "../actionTypes/actionTypes"

export const initialState = {
    filter: {
        categorys: [],
        stock: [],
    },
    keyword: "",
}

export const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_CATEGORY:
            if(!state.filter.categorys.includes(action.payload)){
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        categorys: [...state.filter.categorys, action.payload]
                    }
                }
            }
       else {
        return {
            ...state,
            filter: {
                ...state.filter,
                categorys: state.filter.categorys.filter(category => category !== action.payload)
            }
        }
       }
        case TOGGLE_FIRST_UPLOAD: 
        return {
            ...state,
            filter: {
                ...state.filter,
                stock: !state.filter.stock,
            }
        }
        default: 
        return state;
    }
}