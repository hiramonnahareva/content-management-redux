import React from 'react';

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addcontentData from '../redux/thunk/contents/addContentData';
// import { addContent } from '../redux/actionCreators/contentActions';
// import addcontentData from "../../redux/thunk/contents/addcontentData";

const AddContent = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
  
    const submit = (data) => {
      const content = {
        title: data.title,
        category: data.tag,
        image: data.image,
        // status: data.status === "true" ? true : false,
        date: data.time,
        description: data.description,
      };
      console.log(content);
      dispatch(addcontentData(content));
    };
    
      return (
        <div className='flex justify-center items-center h-full '>
          <form
            className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
            onSubmit={handleSubmit(submit)}
          >
            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-2' htmlFor='model'>
                title
              </label>
              <input placeholder='title' type='text' id='title' className='p-2 border-[1px] rounded border-gray-400' {...register("title")} />
            </div>
            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-2' htmlFor='image'>
                Image
              </label>
              <input type='text' name='image' id='image' className='p-2 border-[1px] rounded border-gray-400' {...register("image")} />
            </div>
    
            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-3' htmlFor='tag'>
                Category
              </label>
              <select name='tag' id='tag' className='p-2 border-[1px] rounded border-gray-400' {...register("tag")}>
                <option value='wed'>wed</option>
                <option value='app'>app</option>
                <option value='software'>software</option>
              </select>
            </div>
            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-2' htmlFor='time'>
                Date/time: 
              </label>
              <input type='date' name='time' id='time' className='p-2 border-[1px] rounded border-gray-400' {...register("time")} />
            </div>
    
            {/* <div className='flex flex-col w-full max-w-xs'>
              <h1 className='mb-3'>Upload Status</h1>
              <div className='flex gap-3'>
                <div>
                  <input
                    type='radio'
                    id='available'
                    value={true}
                    className='p-2 border-[1px] rounded border-gray-400'
                    {...register("status")}
                  />
                  <label className='ml-2 text-lg' htmlFor='available'>
                    Available
                  </label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='stockOut'
                    name='status'
                    value={false}
                    className='p-2 border-[1px] rounded border-gray-400'
                    {...register("status")}
                  />
                  <label className='ml-2 text-lg' htmlFor='stockOut'>
                    Stock out
                  </label>
                </div>
              </div>
            </div> */}
            <div className='flex flex-col w-full max-w-xs'></div>
            <div className='flex flex-col w-full'>
              {/* <label className='mb-2' htmlFor='keyFeature1'>
                Key Feature 1
              </label>
              <input
                type='text'
                name='keyFeature1'
                id='keyFeature1'
                className='p-2 border-[1px] rounded border-gray-400'
                {...register("keyFeature1")}
              />
            </div>
            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-2' htmlFor='keyFeature2'>
                Key Feature 2
              </label>
              <input
                type='text'
                name='keyFeature2'
                id='keyFeature2'
                className='p-2 border-[1px] rounded border-gray-400'
                {...register("keyFeature2")}
              />
            </div>
            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-2' htmlFor='keyFeature3'>
                Key Feature 3
              </label>
              <input
                type='text'
                name='keyFeature3'
                id='keyFeature3'
                className='p-2 border-[1px] rounded border-gray-400'
                {...register("keyFeature3")}
              />
            </div>
            <div className='flex flex-col w-full max-w-xs'>
              <label className='mb-2' htmlFor='keyFeature4'>
                Key Feature 4
              </label>
              <input
                type='text'
                name='keyFeature4'
                id='keyFeature4'
                className='p-2 border-[1px] rounded border-gray-400'
                {...register("keyFeature4")}
              /> */}
              <label htmlFor="description">description</label>
              <textarea placeholder='Enter Description' type="text" name="description" id="description" cols="60" rows="5"className='rounded border-[1px] border-gray-400 px-2 py-3' {...register("description")}></textarea>
            </div>
    
            <div className='flex justify-between items-center w-full'>
              <button
                className='px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
};

export default AddContent;