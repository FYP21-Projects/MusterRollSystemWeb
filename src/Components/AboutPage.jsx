import React from 'react';
import fypimages from '../assets/Landing_pictures/fypimages.png'
const AboutPage = () => {
  return (
    <div className="bg-cofee blue-100 min-h-screen flex items-center justify-center">
  <div className="flex flex-col justify-around md:flex-row w-full max-w-6xl">
    {/* Left Div */}
    <div className="flex justify-around items-center md:w-1/2 p-8">
      <img 
        src={fypimages}
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
      With MRS, you don’t have to worry about dropped connections or slow loading. You can easily clock in and out using your phone or tablet, making it possible to track attendance even in remote areas or places with limited internet access.
      </p>
    </div>
  </div>
</div>

  );
};

export default AboutPage;
