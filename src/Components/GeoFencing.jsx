import React from 'react';
import Geofencing from "../assets/Landing_pictures/Geofencing.webp"

const GeoFencing = () => {
  return (
    <div className="bg-cofee blue-100 min-h-screen flex items-center justify-center">
  <div className="flex flex-col justify-around md:flex-row w-full max-w-6xl">
    
    {/* Right Div */}
    <div className="flex flex-col justify-around items-center text-center md:w-1/2 p-8">
      <h1 className="text-5xl font-bold text-cofee_dark mb-4">
        Uninteruppted GeoFencing
      </h1>
      
      <p className="text-gray-700 text-3xl">
        Location-based Accuracy!<br></br>
      MRS makes sure employees can only clock in or out from specific, set locations, even in remote areas. You'll always know where your team is working and get alerts if anyone tries to clock in from outside the allowed area.

      </p>
    </div>
    {/* Left Div */}
    <div className="flex justify-around items-center md:w-1/2 p-8">
      <img 
        src={Geofencing} 
        alt="Placeholder"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>
  );
};

export default GeoFencing;