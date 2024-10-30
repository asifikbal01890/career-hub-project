import React from 'react';

const CategoryCard = ({category}) => {
  
    
    const {logo, availability, category_name} = category;

    return (
        <div className='career-bg p-10'>
            <div className='bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] p-[15px] rounded-lg w-fit mb-8'>
            <img src={logo} alt="" srcset="" />
            </div>
           
            <h3 className='text-xl font-extrabold mb-2'>{category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

export default CategoryCard;