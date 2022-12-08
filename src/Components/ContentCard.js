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
        <div className='h-40 w-56 mx-auto'>
          <img src={content.image} alt={content.model} />
        </div>
        <h1 className='font-bold text-center'>{content.model}</h1>
        <div className='flex gap-5 mt-4 justify-center'>
        <p className='text-center font-semibold mb-3'>time: {content.time}</p>
        <p className='text-center font-semibold mb-3'>Date: {content.date}</p>
        </div>
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
        {isReadMore ? content.descriptions.slice(0, 150) : content.descriptions}
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