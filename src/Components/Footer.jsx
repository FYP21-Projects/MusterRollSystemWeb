import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
                    <div>
                        <h6 className="text-orange-500 font-semibold mb-2">Product</h6>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Attendance Tracker</a></li>
                            <li><a href="#" className="hover:underline">Time & Attendance Software</a></li>
                            <li><a href="#" className="hover:underline">Time Clock Software</a></li>
                            <li><a href="#" className="hover:underline">Timesheet App</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-orange-500 font-semibold mb-2">Resources</h6>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Timesheet Calculator</a></li>
                            <li><a href="#" className="hover:underline">Timesheet Templates</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col justify-start'>
                    <div className="text-center lg:text-left mt-8 lg:mt-0">
                        <h6 className="font-semibold mb-2">Jibble</h6>
                        <p>Maximize your team's productivity today</p>
                    </div>

                    <div className="flex flex-col items-center lg:items-end space-y-4 mt-8 lg:mt-0">
                        <div className="flex space-x-4">
                            <img src="app-store-icon.png" alt="App Store" className="h-10" />
                            <img src="google-play-icon.png" alt="Google Play" className="h-10" />
                            <img src="chrome-web-store-icon.png" alt="Chrome Web Store" className="h-10" />
                            <img src="microsoft-store-icon.png" alt="Microsoft Store" className="h-10" />
                        </div>

                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                            <a href="#" className="text-blue-700 hover:underline">Facebook</a>
                        </div>
                    </div>
                </div>


            </div>

            <div className="container mx-auto px-4 mt-8 text-center lg:text-left">
                <p className="text-gray-400">&copy; 2024 Jibble Group. 3790 El Camino Real, Palo Alto, CA 94306, USA</p>
                <div className="flex justify-center lg:justify-start space-x-4 mt-2">
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
