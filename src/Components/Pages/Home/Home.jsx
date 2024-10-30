import React from 'react';
import JobCategory from './JobCategory/JobCategory';
import FeatureJob from './FeatureJob/FeatureJob';

const Home = () => {
    return (
        <div>
            <JobCategory></JobCategory>
            <FeatureJob></FeatureJob>
        </div>
    );
};

export default Home;