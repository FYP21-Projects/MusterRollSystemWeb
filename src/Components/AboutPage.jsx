import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-cofee blue-100 min-h-screen flex items-center justify-center">
  <div className="flex flex-col justify-around md:flex-row w-full max-w-6xl">
    {/* Left Div */}
    <div className="flex justify-around items-center md:w-1/2 p-8">
      <img 
        src="https://via.placeholder.com/400" 
        alt="Placeholder"
        className="rounded-lg shadow-lg"
      />
    </div>
    {/* Right Div */}
    <div className="flex flex-col justify-around items-center text-center md:w-1/2 p-8">
      <h1 className="text-5xl font-bold text-cofee_dark mb-4">
        Capture Attendance while offline
      </h1>
      <p className="text-gray-700 text-3xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel 
        risus in nisi vehicula dapibus. Nulla facilisi. Integer pretium nisl 
        et mi condimentum, id dignissim leo pharetra.
      </p>
    </div>
  </div>
</div>

  );
};

export default AboutPage;
