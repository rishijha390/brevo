import React from "react";
const Hero = () => {
  return <section className="w-full px-4 py-12 bg-[#e6ffcc] md:px-16 lg:px-24 flex flex-col md:flex-row md:items-center">
      <div className="md:w-1/2">
        <p className="uppercase text-sm font-semibold mb-2">
          ENTERPRISE SOLUTION
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Stronger relationships,
          <br />
          agile growth
        </h1>
        <p className="text-lg mb-8">
          The flexibility to build brilliant customer experiences across
          multichannel solutions
        </p>
        <a href="/demo" className="inline-block bg-[#0a6e4d] text-white px-6 py-3 rounded-md font-medium">
          Get a demo
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2">
        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg p-3">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="py-3">
              <h3 className="font-medium mb-2">Welcome back, Jane</h3>
              <p className="text-sm mb-2">Overview</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs">Sub-organizations</p>
                  <p className="font-medium">12</p>
                </div>
                <div>
                  <p className="text-xs">Users</p>
                  <p className="font-medium">35</p>
                </div>
                <div>
                  <p className="text-xs">Emails sent</p>
                  <p className="font-medium">256,304</p>
                </div>
                <div>
                  <p className="text-xs">SMS credits used</p>
                  <p className="font-medium">78,000</p>
                </div>
              </div>
              <div className="mt-8">
                <img src="/Screenshot_2025-03-07_123259.png" alt="Dashboard interface" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
