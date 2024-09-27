import React, { useEffect } from "react";
import Geofencing from "../assets/Landing_pictures/Geofencing.webp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const GeoFencing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: false, // Allow animation to happen every time the element comes into view
    });
    AOS.refresh(); // Refresh animations on component update or scroll
  }, []);

  return (
    <div className="bg-cofee blue-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-around md:flex-row w-full max-w-6xl">
        {/* Right Div */}
        <div className="flex flex-col justify-around items-center text-center md:w-1/2 p-8">
          <h1
            className="text-5xl font-bold text-cofee_dark mb-4"
            data-aos="fade-up"
          >
            Uninteruppted GeoFencing
          </h1>

          <p
            className="text-gray-700 text-2xl"
            data-aos="fade-up" // Add animation to the text
            data-aos-delay="200" // Delay the animation by 200ms
          >
            Location-based Accuracy!<br></br>
            MRS makes sure employees can only clock in or out from specific, set
            locations, even in remote areas. You'll always know where your team
            is working and get alerts if anyone tries to clock in from outside
            the allowed area.
          </p>
        </div>
        {/* Left Div */}
        <div
          className="flex justify-around items-center md:w-1/2 p-8"
          data-aos="fade-up"
        >
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
