import React, { useEffect } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteContent, loadContent } from "../redux/actionCreators/contentActions";
import getContentData from "../redux/thunk/contents/fetchContents";
import removeContent from "../redux/thunk/contents/removeContetnt";
// import deleteContent from "../../redux/thunk/Contents/deleteContent";
// import loadContentData from "../../redux/thunk/Contents/fetchContents";

const ContentList = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state) =>  state.content.contents);
    useEffect(() => {
      dispatch(getContentData())
    }, [dispatch]);

  return (
    <div className='flex flex-col justify-center items-center h-full w-full '>
      <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <div className='font-semibold text-gray-800'>Contents</div>
        </header>

        <div className='overflow-x-auto p-3'>
          <table className='table-auto w-full'>
            <thead className='text-xs font-semibold uppercase text-gray-600 bg-gray-50'>
              <tr>
                <th></th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Content Name</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Category</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Date</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Edit</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Delete</div>
                </th>
              </tr>
            </thead>

            <tbody className='text-sm divide-y divide-gray-100'>
              {contents?.map(({ title, category, date,  _id }) => (
                <tr key={_id}>
                  <td className='p-2'>
                    <input type='checkbox' className='w-5 h-5' value='id-1' />
                  </td>
                  <td className='p-2'>
                    <div className='font-medium text-gray-800'>{title}</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left'>
                      
                        <p className=' font-medium'>{category}</p>
                        
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left font-medium'>
                      {date}
                    </div>
                  </td>
                          <td className='p-2'>
                            <div className='text-left capitalize'><MdOutlineEdit className="text-2xl text-blue-500"/></div>
                          </td>
                  <td className='p-2'>
                    <div className='flex justify-center'>
                      <button onClick={() => dispatch(removeContent(_id))}>
                        <RiDeleteBin5Line className="text-2xl text-red-500"/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default ContentList;