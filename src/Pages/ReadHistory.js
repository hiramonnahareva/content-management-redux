import React from 'react';
import { useSelector } from 'react-redux';
import ContentCard from '../Components/ContentCard';

const ReadHistory = () => {
    const addContent = useSelector((state) => state.content.content)
    return (
        <div className=''>
            { addContent.length ? 
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    addContent
                    .sort((a, b) => a.ContentCard - b.ContentCard)
                    .map((content) => <ContentCard key={content._id} content={content}></ContentCard>)
                }
            </div>
                 : 
                <div className='flex h-full items-center justify-center'>
                    <p className='text-2xl text-blue-800'>You do not read any content yet.</p>
                </div>
            }
        </div>
    );
};

export default ReadHistory;