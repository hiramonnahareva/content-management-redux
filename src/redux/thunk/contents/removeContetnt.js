import swal from "sweetalert";
import { deleteContent } from "../../actionCreators/contentActions";

const removeContent = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/contents/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
   if(data.acknowledged){
    dispatch(deleteContent())
    swal("Good job!", "You have successfully deleted the content!", "success");
    
   }

    }
}
export default removeContent