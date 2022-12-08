import React from 'react';
import { useSelector } from 'react-redux';
import ContentCard from '../Components/ContentCard';

const ReadHistory = () => {
    const addContent = useSelector((state) => state.content)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                addContent.map((content) => <ContentCard content={content}></ContentCard>)
            }
        </div>
    );
};

export default ReadHistory;