import React from 'react';
import { NavLink } from 'react-router';

const NextOp = () => {
    return (
        <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Find Your Next Career Opportunity?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10">
            Join thousands of job seekers who have successfully found their
            perfect job match through our platform.
          </p>
          <NavLink to='/'>
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg !rounded-button whitespace-nowrap cursor-pointer">
            Get Started Today
          </button>
          </NavLink>
        </div>
      </section>
    );
};

export default NextOp;