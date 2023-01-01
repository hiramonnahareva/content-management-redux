import { addContent } from "../../actionCreators/contentActions";
import swal from 'sweetalert';

const addcontentData = (content) => {
    return async(dispatch, getState) => {
    const res = await fetch("https://dashboard-server-1.onrender.com/post", {
      method: "POST",
      body: JSON.stringify(content),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(
        addContent({
          _id: data.insertedId,
          ...content,
        })
      );
      
      swal("WOW!", "You have successfully added the content!", "success");
    }
  };
}
export default addcontentData;