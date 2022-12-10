import { addContent } from "../../actionCreators/contentActions";

const addcontentData = (content) => {
    return async(dispatch, getState) => {
    const res = await fetch("http://localhost:5000/post", {
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
    }
  };
}
export default addcontentData;