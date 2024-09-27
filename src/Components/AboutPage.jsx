import React, { useEffect } from 'react';
import fypimages from '../assets/Landing_pictures/fypimages.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutPage = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration (ms)
      once: false,     // Allow animation to happen every time the element comes into view
    });
    AOS.refresh();     // Refresh animations on component update or scroll
  }, []);

  return (
    <div className="bg-cofee blue-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-around md:flex-row w-full max-w-6xl">
        {/* Left Div */}
        <div
          className="flex justify-around items-center md:w-1/2 p-8"
          data-aos="fade-up"  // Apply the AOS animation
        >
          <img src={fypimages} alt="Placeholder" className="rounded-lg shadow-lg" />
        </div>

        {/* Right Div */}
        <div className="flex flex-col justify-around items-center text-center md:w-1/2 p-8">
          <h1
            className="text-5xl font-bold text-cofee_dark mb-4"
            data-aos="fade-up"  // Add animation to the heading
          >
            Capture Attendance while offline
          </h1>
          <p
            className="text-gray-700 text-2xl"
            data-aos="fade-up"  // Add animation to the text
            data-aos-delay="200"  // Delay the animation by 200ms
          >
            With MRS, you don’t have to worry about dropped connections or slow loading.
            You can easily clock in and out using your phone or tablet, making it possible
            to track attendance even in remote areas or places with limited internet access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
