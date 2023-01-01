import { loadContent } from "../../actionCreators/contentActions";

const getContentData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://dashboard-server-1.onrender.com/contents");
        const data = await res.json();
        if (data.length) {
            dispatch(loadContent(data))

        }
    }
}
export default getContentData;