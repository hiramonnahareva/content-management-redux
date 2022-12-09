import { TOGGLE_CATEGORY, TOGGLE_STOCK } from "../actionTypes/actionTypes"

export const initialState = {
    filter: {
        categorys: [],
        stock: false,
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
        case TOGGLE_STOCK: 
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