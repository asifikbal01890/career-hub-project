import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('/data/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    return (
        <div>
           <div className='text-center'>
           <h1 className='lg:text-5xl md:text-4xl text-3xl font-extrabold'>Job Category List</h1>
           <p className='font-medium mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
           <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-[25px] mt-8'>
        {
            categories?.map(category=> <CategoryCard key={category.id} category={category}></CategoryCard>)
        }
           </div>
        </div>
    );
};

export default JobCategory;