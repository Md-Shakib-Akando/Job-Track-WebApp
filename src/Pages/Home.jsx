import React from 'react';
import Banner from '../components/Banner/Banner';
import Work from '../components/How-it-work/Work';
import { useLoaderData } from 'react-router';
import Company from '../components/company/Company';

const Home = () => {
    const data = useLoaderData();
    return (
        <>
            <div className="w-10/12 mx-auto">
                <Banner />
                <Work />

            </div>
            <div className=" bg-base-200 py-10 mb-16">
               <Company data={data}></Company>
            </div>
        </>
    );
};

export default Home;