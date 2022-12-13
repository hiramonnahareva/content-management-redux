import { TOGGLE_CATEGORY, TOGGLE_FIRST_UPLOAD } from "../actionTypes/actionTypes"

export const toggleCategory = (categoryName) => {
    return {
        type: TOGGLE_CATEGORY,
        payload: categoryName,
    }
}
    export const toggleFirstUpload = (firestUpload) => {
        return {
            type: TOGGLE_FIRST_UPLOAD,
            payload: firestUpload,
        }
}