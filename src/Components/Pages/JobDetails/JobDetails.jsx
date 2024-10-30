import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobsInfo = useLoaderData()
    const params = useParams()
    
    const jobInfo = jobsInfo?.find(job => job.id === parseInt(params.id))
    console.log(jobInfo);
    
    
    
    return (
        <div>
            make it
        </div>
    );
};

export default JobDetails;