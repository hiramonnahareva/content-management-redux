import swal from "sweetalert";
import { updateContent } from "../../actionCreators/contentActions";

const updateData = (id, content) => {

    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/contents/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(content)
    });
    const data = await res.json();
   if(data.acknowledged){
    dispatch(updateContent())
    swal("Good job!", "You have successfully edited the content!", "success");
   }
    }
}
export default updateData;