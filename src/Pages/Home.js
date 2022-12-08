import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContentCard from '../Components/ContentCard';

const Home = () => {
    const [contents, setContents] = useState([]);
    useEffect(() => {
      fetch("data.json")
      .then(res => res.json())
      .then(data => setContents(data))
    }, [])

    const state = useSelector((state) => state)
    console.log(state)
    
    return (
       <div className=''>
        <form className=''>
  <label>
    <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}" />
    <span class="validity"></span>
  </label>
<input type="time" id="appt" name="appt"></input>
</form>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                contents.map(content => <ContentCard content={content}></ContentCard>)
            }
        </div>
       </div>
    );
};

export default Home;