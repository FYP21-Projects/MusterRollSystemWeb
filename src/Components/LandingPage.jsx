import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center">
      {/* Left Div */}
      <div className="flex flex-col justify-start ml-8 text-start md:w-1/2 p-8">
        <h1 className="text-7xl font-bold text-red-600 mb-4">
          Muster Roll System
        </h1>
        <p className="text-gray-700 text-4xl mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel 
          risus in nisi vehicula dapibus. Nulla facilisi. Integer pretium nisl 
          et mi condimentum, id dignissim leo pharetra.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 w-40 text-2xl mt-10 text-white font-bold py-2 px-4 rounded-full">
          See More
        </button>
      </div>

      {/* Right Div */}
      <div className="flex justify-center items-center md:w-1/2 p-8">
        <img 
          src="https://via.placeholder.com/400" 
          alt="Placeholder"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default LandingPage;
