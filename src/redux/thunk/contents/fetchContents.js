import { loadContent } from "../../actionCreators/contentActions";

 const getContentData = () => {
    return async(dispatch, getState) => {
        const res = await fetch("http://localhost:5000/contents");
        const data = await res.json();
        if(data.length){
            console.log(data)
            dispatch(loadContent(data))
        }
    }
}
export default getContentData;