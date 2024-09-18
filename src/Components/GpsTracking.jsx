import React from 'react';

const GpsTracking = () => {
  return (
    <div className="bg-cofee blue-100 min-h-screen flex items-center justify-center">
  <div className="flex flex-col justify-around md:flex-row w-full max-w-6xl">
    
    {/* Right Div */}
    <div className="flex flex-col justify-around items-center text-center md:w-1/2 p-8">
      <h1 className="text-5xl font-bold text-cofee_dark mb-4">
       Gps Tracking Accuracy
      </h1>
      
      <p className="text-gray-700 text-3xl">
      all without needing the internet!<br></br>
No matter where your team is or how far they go, MRS keeps you informed by accurately tracking their GPS locations, even without a connection.







      </p>
    </div>
    {/* Left Div */}
    <div className="flex justify-around items-center md:w-1/2 p-8">
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

export default GpsTracking;
