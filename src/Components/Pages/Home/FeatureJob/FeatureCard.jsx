import React from 'react';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const FeatureCard = ({ jobInfo }) => {
    const { id, job_title, company_name, job_type, location, logo, remote_or_onsite, salary } = jobInfo

    return (
        <div className='border botder-[#E8E8E8] rounded-lg p-10'>
            <img src={logo} alt="" srcset="" />
            <h2 className='mt-8 text-2xl font-extrabold mb-2'>{job_title}</h2>
            <p className='text-xl font-semibold text-[#757575]'>{company_name}</p>
            <div className='mt-4 flex items-center gap-4'>
               
                <button className='career-text-primary btn-border font-extrabold px-[19px] py-[9px]'>{job_type}</button>


                <button className='career-text-primary btn-border font-extrabold px-[19px] py-[9px]'>{remote_or_onsite}</button>

            </div>
            <div className=' flex items-center gap-6 mb-6 mt-4'>
                <div className='flex items-center gap-2 text-[#757575]'>
                    <IoLocationOutline className='text-2xl' />
                    <h5 className='text-xl font-semibold'>{location}</h5>
                </div>
                <div className='flex items-center gap-2 text-[#757575]'>
                    <AiOutlineDollarCircle className='text-2xl' />
                    <p className='text-xl font-semibold'>{salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`} className='career-btn !px-[18px] !py-[11px]'>View Details</Link>
        </div>
    );
};

export default FeatureCard;