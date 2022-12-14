import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import updateData from '../redux/thunk/contents/updateContent';
// import { addContent } from '../redux/actionCreators/contentActions';
// import addcontentData from "../../redux/thunk/contents/addcontentData";
const Update = () => {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const {id} = useParams()
  
    const submit = (data) => {
      const content = {
        title: data.title,
        category: data.tag,
        image: data.image,
        date: data.time,
        description: data.description,
      };
      console.log(id, content)
      dispatch(updateData(id, content));
    };

        
          return (
            <div className='flex justify-center items-center h-full '>
              <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
              >
                <div className='flex flex-col w-full max-w-xs'>
                  <label className='mb-2' htmlFor='model'>
                    Title
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
                    <option value='web'>web</option>
                    <option value='app'>app</option>
                    <option value='software'>software</option>
                  </select>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                  <label className='mb-2' htmlFor='time'>
                    Date/Time: 
                  </label>
                  <input type='date' name='time' id='time' className='p-2 border-[1px] rounded border-gray-400' {...register("time")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'></div>
                <div className='flex flex-col w-full'>
                  <label htmlFor="description">Description</label>
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

export default Update;