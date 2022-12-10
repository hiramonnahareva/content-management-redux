import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentCard from '../Components/ContentCard';
// import { loadContent } from '../redux/actionCreators/contentActions';
import { toggleCategory, toggleStock } from '../redux/actionCreators/filterActions';
import getContentData from '../redux/thunk/contents/fetchContents';

const Home = () => {
  const activeClass = "text-white bg-blue-500 border-white";
  const dispatch = useDispatch();
    const filters = useSelector((state) => state.filter.filter);
    const contents = useSelector((state) =>  state.content.contents);
    
    const {categorys, stock} = filters;
      useEffect(() => {
        dispatch(getContentData())
      }, [dispatch]);

    // conditional rendering content
    let content;
    if(contents?.length){
     content = contents.map(content => <ContentCard content={content} key={content._id}></ContentCard>)
    }
    if(contents?.length && (stock || categorys.length)){
     content = contents.map(content => <ContentCard content={content} key={content._id}></ContentCard>)
    }
    
    return (
       <div className=''>
      <div className='mb-10 flex justify-end gap-5'>
        <button className={`border px-3 py-1 rounded-full font-semibold ${ stock ? activeClass : null}`}
        onClick={() => dispatch(toggleStock())}
        >
          stock
        </button>
        <button className={`border px-3 py-1 rounded-full font-semibold ${ categorys.includes("Development") ? activeClass : null}`} onClick={() => dispatch(toggleCategory("Development"))}
        >
          Wed
        </button>
      </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {content}
        </div>
       </div>
    );
};

export default Home;