import React, { useState } from 'react';
import {MdDeleteForever} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { readHistory, updateContent } from '../redux/actionCreators/contentActions';
import removeContent from '../redux/thunk/contents/removeContetnt';

const ContentCard = ({content}) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    return (
        <div className='shadow-sm relative rounded border p-3 flex flex-col text-gray-900'>
        <div className=' h-48 w-72'>
          <img src={content.image} alt={content.title} />
        </div>
      <button className=' bg-gradient-to-r from-blue-500 to-cyan-500 text-yellow-50 mt-2 rounded py-1 w-20 font-semibold mb-3'>{content.category}</button>
        <h1 className='font-bold text-[18px] text-blue-500'>{content.title}</h1>
        <p className='font-semibold mb-3'>Date: {content.date}</p>
        <div className='flex gap-20 mt-5'>
       
            
           { pathname.includes('readHistory') &&  
           <Link to={`/update/${content?._id}` }
           title='update'
           className=' border-2 border-emerald-400 text-center rounded flex-1 py-1 ms-20 text-emerald-400 text-bold' onClick={() => dispatch(updateContent(content?._id, content))}
           >
              Update
              </Link>
            }
            { pathname.includes('readHistory') &&  
            <button
               title='Remove'
               className='flex justify-between p-1 rounded-full text-red-600' onClick={() => dispatch(removeContent(content?._id))}
             >
               <MdDeleteForever size='25' />
             </button>
             }
        </div>
        <div className=' flex-1'>
       {!pathname.includes('readHistory') &&
        <p className="text" onClick={()=>dispatch(readHistory(content))}>
        {isReadMore ? content.description.slice(0, 150) : content.description}
        <span onClick={toggleReadMore} className="read-or-hide cursor-pointer">
          {isReadMore ? "... read more" : " show less"}
        </span>
      </p>
       }
                {/* <p className='text-sm '>
                 {content.descriptions.slice(0, 50)} <button >Read More...</button>
                </p> */}
        </div>
        
      </div>
    );
};

export default ContentCard;