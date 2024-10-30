import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const FeatureJob = () => {
    const [jobs, setJobs] = useState([]);
    const [handleBtn, setHandleBtn] = useState(false);


    useEffect(() => {
        fetch('/data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-extrabold'>Featured Jobs</h1>
                <p className='font-medium mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {!handleBtn ?
                <div className='grid grid-cols-2 gap-6 mt-8'>
                    {
                        jobs?.slice(0, 4).map(job => <FeatureCard key={job.id} jobInfo={job}></FeatureCard>)
                    }

                </div>
                :
                <div className='grid grid-cols-2 gap-6 mt-8'>
                    {
                        jobs?.map(job => <FeatureCard key={job.id} jobInfo={job}></FeatureCard>)
                    }

                </div>

            }
            <div className=' text-center mt-8'>
                <button onClick={() => setHandleBtn(!handleBtn)} className='career-btn'>{!handleBtn? "See All" : "See Less"}</button>
            </div>
        </div>
    );
};

export default FeatureJob;