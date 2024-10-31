import React from 'react';
import { getStorageItem } from '../../../Utility/LocalStorage';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
 const allJobData = useLoaderData()
    const ItemsId = getStorageItem() 
    const apliedJobs = allJobData.filter(job => ItemsId.includes(job.id))
    // const apliedJobs = allJobData.filter(job => [2,3].includes(3))


    return (
        <div>
           <h1 className=' text-4xl font-bold'>aplied job {apliedJobs.length}</h1>
        </div>
    );
};

export default AppliedJobs;