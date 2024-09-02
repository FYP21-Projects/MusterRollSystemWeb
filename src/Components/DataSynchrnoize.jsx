import React from 'react';

const DataSynchronize = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        
        {/* Left Div */}
        <div className="flex flex-col items-center text-center md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            To Data Synchronize
          </h1>
          <p className="text-gray-700">
           This will automatically syncs attendance data when a connection is available, transferring locally stored attendance records to the server, keeping your records up to date and eliminating the need for manual data entry.
          </p>
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
    </div>
  );
};

export default DataSynchronize;
