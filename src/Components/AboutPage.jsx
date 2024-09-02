import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-light-blue-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        
        {/* Right Div */}
        <div className="flex flex-col items-center text-center md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Capture Attendance while offline
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel 
            risus in nisi vehicula dapibus. Nulla facilisi. Integer pretium nisl 
            et mi condimentum, id dignissim leo pharetra.
          </p>
        </div>

        {/* Left Div */}
        <div className="flex justify-center items-center md:w-1/2 p-8">
          <img 
            src="https://via.placeholder.com/400" 
            alt="Placeholder"
            className="rounded-lg shadow-lg"
          />
        </div>
        
      </div>
    </div>
  );
};

export default AboutPage;
