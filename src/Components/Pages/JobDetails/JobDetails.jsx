import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getStorageItem, setStorageItem } from '../../../Utility/LocalStorage';
import bgOne from "../../../../public/assets/images/bg1.png"
import bgTwo from "../../../../public/assets/images/bg2.png"

const JobDetails = () => {
    // const [isApplied, setIsApplied] = useState(false)
    // const [toggole, setToggole] = useState(false)
    const jobsInfo = useLoaderData()
    const params = useParams()




    // useEffect(()=>{
    //     const data = getStorageItem()
    //     const Applied = data.includes(parseInt(params.id))
    //     setIsApplied(Applied)
    // }, [toggole])

    const jobInfo = jobsInfo?.find(job => job.id === parseInt(params.id))
    // console.log(jobInfo);

    const handleApplyBtn = (id, title) => {
        setStorageItem(id, title)
        //    setToggole(true)
    }


    return (
        <div>
            <div className=' max-w-[1320px] mx-auto'>
                <h1 className='text-4xl font-bold'>{jobInfo.job_title}</h1>
                <p className=' font-semibold'>{jobInfo.company_name}</p>
                {/* {!isApplied? */}
                <button onClick={() => handleApplyBtn(jobInfo.id, jobInfo.job_title)} className='career-btn'>Apply Now</button>
                {/* :
                <button disabled className='career-btn'>Apply Now</button>
            } */}
            </div>
            <div className='h-[400px] career-bg absolute top-0 w-full -z-10'>
                <div className='absolute left-0 bottom-0 '>
                    <img src={bgOne} alt="" srcset="" />
                </div>
                <div className='absolute right-0 top-0 '>
                    <img src={bgTwo} alt="" srcset="" />
                </div>

            </div>
        </div>
    );
};

export default JobDetails;