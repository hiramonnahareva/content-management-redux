import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentCard from '../Components/ContentCard';
import { toggleCategory, toggleFirstUpload } from '../redux/actionCreators/filterActions';
import getContentData from '../redux/thunk/contents/fetchContents';
import HashLoader from "react-spinners/HashLoader";

const Home = () => {
  const activeClass = "text-white bg-blue-500 border-white";
  const dispatch = useDispatch();
    const filters = useSelector((state) => state.filter.filter);
    const contents = useSelector((state) =>  state.content.contents);
    
    const {categorys, first_upload} = filters;
    console.log(filters)
      useEffect(() => {
        dispatch(getContentData())
      }, [dispatch]);

    // conditional rendering content

    let content;
    if(contents?.length){
     content = contents.map(content => <ContentCard content={content} key={content._id}></ContentCard>)
    }
    if(contents?.length && categorys.length){
     content = contents.filter((content) => categorys.includes(content?.category.toLowerCase())).map(content => <ContentCard content={content} key={content._id}></ContentCard>)
    }
    
    
    return (
       <div className=''>
      <div className='mb-10 flex justify-end gap-5'>
        <button className={`border px-3 py-1 rounded-full font-semibold ${ first_upload ? activeClass : null}`}
        onClick={() => dispatch(toggleFirstUpload(new Date()))}
        >
          First Upload
        </button>
        <button className={`border px-3 py-1 rounded-full font-semibold ${ categorys.includes("web") ? activeClass : null}`} onClick={() => dispatch(toggleCategory("web"))}
        >
          Web
        </button>
        <button className={`border px-3 py-1 rounded-full font-semibold ${ categorys.includes("app") ? activeClass : null}`} onClick={() => dispatch(toggleCategory("app"))}
        >
          App
        </button>
        <button className={`border px-3 py-1 rounded-full font-semibold ${ categorys.includes("software") ? activeClass : null}`} onClick={() => dispatch(toggleCategory("software"))}
        >
          Software
        </button>
      </div>
         {
          content ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {content}
      </div> :
      <div className='h-[100vh] flex justify-center items-center'>
        <HashLoader color="#36d7b7" />
      </div>
         }
       </div>
    );
};

export default Home;