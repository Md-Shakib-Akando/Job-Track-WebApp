import React, { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import Work from '../components/How-it-work/Work';
import { useLoaderData } from 'react-router';
import Company from '../components/company/Company';
import Success from '../components/Success/Success';
import NextOp from '../components/NextOp';
import JobCategory from '../components/JobCategory/JobCategory';

const Home = () => {
    const data = useLoaderData();
    useEffect(() => {
        document.title = 'JobTrack | Home';
      }, []);
    return (
        <>
            <div className="w-10/12 mx-auto">
                <Banner />
                <Work />

            </div>
            <div className=" bg-base-200 py-10 mb-16">
               <Company data={data}></Company>
            </div>
            <div className="w-10/12 mx-auto py-10">
               <JobCategory></JobCategory>
            </div>
            <div className="w-10/12 mx-auto py-10">
                <Success></Success>
            </div>
            <NextOp></NextOp>
        </>
    );
};

export default Home;