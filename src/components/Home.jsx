import React, { useState, useEffect } from 'react';
// import demo1 from '../assets/images/sage.jpg';
import demo2 from '../assets/images/save1.jpg'; // Add your images
import demo3 from '../assets/images/save2.jpg';
import demo4 from '../assets/images/save3.jpg';
import demo5 from '../assets/images/save4.jpg';

const images = [demo2, demo3, demo4, demo5]; // Array of images

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div>
      {/* Image Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={images[currentIndex]} // Use current image
          alt="Slideshow"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center p-6 md:p-12 text-center bg-black bg-opacity-40">
          <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold">
          </h1>
          <h3 className="text-white text-lg md:text-2xl lg:text-4xl mt-4">
          </h3>
        </div>
      </div>

      {/* Cards Section */}
      <div className="p-6 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-300 p-6 rounded-lg shadow-lg flex items-center justify-center h-[200px]">
            <h2 className="text-xl font-bold">15+ years of experience</h2>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-lg flex items-center justify-center h-[200px]">
            <h2 className="text-xl font-bold">2500+ satisfied customers</h2>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-lg flex items-center justify-center h-[200px]">
            <h2 className="text-xl font-bold">100+ completed projects in MNRE DBT SCHEME Kerala</h2>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-lg flex items-center justify-center h-[200px]">
            <h2 className="text-xl font-bold">Above 1MW Roof top Solar Installations</h2>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-12 bg-white text-gray-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">ON-GRID SOLAR SYSTEM</h2>
        <p className="text-lg mb-4">
          On-grid refers to a type of solar system that is tied to the local grid. It is strongly recommended for domestic use as household energy needs change, usually daily. The system is designed to control the electricity when the energy output exceeds or falls below your demand.
        </p>
        <p className="text-lg mb-4">
          In this system, the grid acts as your battery. When the panels get less sunshine and can’t provide the standard energy output, you can switch to grid electricity instead of buying a battery. In addition, the on-grid system will automatically transfer excess and unused solar electricity to the grid, allowing you to build credit. You can then use these solar credits to buy electricity from the grid or pay them off by the end of the year. This arrangement operates under the net metering system.
        </p>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-6 mb-4">How Does an On-Grid Solar System Work?</h3>
        <p className="text-lg mb-4">
          Like other types of solar power plants, the panel produces electricity in an on-grid solar system. However, because the system is connected to the local grid, the net metering system plays an important role in your monthly electricity costs.
        </p>
        <p className="text-lg mb-4">
          An on-grid solar power system provides your home with the electricity required during sunshine hours. As it is connected to the grid, you can draw power from the battery storage when electricity generation is low — primarily during the night and on cold and cloudy days. The arrangement of solar panels on the roof captures maximum sunlight and converts it into solar power. This energy generated in DC form runs through the inverter to transform into alternating current (AC). This solar electricity is suitable for running your home appliances and all electronic devices.
        </p>
        <p className="text-lg mb-4">
          When the solar energy generated is more than the requirements of your house, the unused power is fed to the national grid. Similarly, you can draw power from the grid when there is insufficient energy production. The meter box records the import and export of power and eventually tells you the net amount to be paid/received through monthly utility bills.
        </p>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-6 mb-4">Why Solar On-Grid System?</h3>
        <ul className="list-disc pl-6 text-lg">
          <li className="mb-2">Accelerated depreciation Benefit for commercial customers</li>
          <li className="mb-2">Environmentally-friendly</li>
          <li className="mb-2">ROI in just 3.5 Years</li>
          <li className="mb-2">Subsidy for residential customers</li>
          <li className="mb-2">Savings in electricity bill by generating your own electricity – “reduce your electricity bill to Zero”</li>
          <li className="mb-2">Collateral free loans with low interest rate</li>
          <li className="mb-2">Low initial cost and less maintenance</li>
          <li className="mb-2">Special schemes under MSME</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
