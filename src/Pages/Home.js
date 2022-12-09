import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentCard from '../Components/ContentCard';
import { loadContent } from '../redux/actionCreators/contentActions';
// import { loadContent } from '../redux/actionCreators/contentActions';
import { toggleCategory, toggleStock } from '../redux/actionCreators/filterActions';
import loadContentData from '../redux/thunk/contents/fetchContents';

const Home = () => {
  const activeClass = "text-white bg-blue-500 border-white";
  const dispatch = useDispatch();
    const filters = useSelector((state) => state.filter.filter);
    const contents = useSelector((state) => state.content.contents);
    const {categorys, stock} = filters;
    console.log(categorys, stock)
    useEffect(() => {
      dispatch(loadContentData())
    }, [dispatch]);

    // conditional rendering content
    let content;
    if(contents.length){
     content = contents.map(content => <ContentCard content={content}></ContentCard>)
    }
    if(contents.length && (stock || categorys.length)){
     content = contents.map(content => <ContentCard content={content}></ContentCard>)
    }

    const state = useSelector((state) => state)
    console.log(state)
    
    return (
       <div className=''>
        {/* <form className=''>
  <label>
    <input type="date"  />
    <span className="validity"></span>
  </label>
<input type="time" ></input>
</form> */}
      <div className='mb-10 flex justify-end gap-5'>
        <button className={`border px-3 py-1 rounded-full font-semibold ${ stock ? activeClass : null}`}
        onClick={() => dispatch(toggleStock())}
        >
          stock
        </button>
        <button className={`border px-3 py-1 rounded-full font-semibold ${ categorys.includes("Development") ? activeClass : null}`} onClick={() => dispatch(toggleCategory("Development"))}
        >
          Development
        </button>
        {/* <button
        >
          Intel
        </button> */}
      </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {content}
        </div>
       </div>
    );
};

export default Home;