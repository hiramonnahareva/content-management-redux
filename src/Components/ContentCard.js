import React, { useState } from 'react';
import {MdDeleteForever} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addContent, deleteContent } from '../redux/actionCreators/contentActions';

const ContentCard = ({content}) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    return (
        <div className='shadow-sm relative rounded border p-3 flex flex-col text-gray-900' onClick={()=>dispatch(addContent(content))}>
        <div className=' h-48 w-72'>
          <img src={content.authorAvatar} alt={content.title} />
        </div>
      <button className=' bg-gradient-to-r from-blue-500 to-cyan-500 text-yellow-50 mt-2 rounded py-1 w-32 font-semibold mb-3'>{content.category}</button>
      {/* <div className="flex gap-2">
      {content.subCategory.map((category) => 
        <ul>
          <li className=' bg-slate-300 mt-2 rounded px-2 font-semibold mb-3'>{category}</li>
        </ul>
      )}
      </div> */}
        <h1 className='font-bold text-[18px] text-blue-500'>{content.title}</h1>
        <p className='font-semibold mb-3'>Date: {content.createdAt}</p>
        <div className='flex gap-20 mt-5'>
       
            
           { pathname.includes('readHistory') &&  
           <button
           title='Remove'
           className=' border-2 border-emerald-400 rounded flex-1 py-1 ms-20 text-emerald-400 text-bold' 
           >
              Update
            </button>
            }
            { pathname.includes('readHistory') &&  
            <button
               title='Remove'
               className='flex justify-between p-1 rounded-full text-red-600' onClick={() => dispatch(deleteContent(content))}
             >
               <MdDeleteForever size='25' />
             </button>
             }
        </div>
        <div className=' flex-1'>
       {!pathname.includes('readHistory') &&
        <p className="text">
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