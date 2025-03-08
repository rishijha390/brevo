import React from "react";
const CustomerView = () => {
  return <section className="w-full px-4 py-12 bg-[#e6ffcc] md:px-16 lg:px-24 flex flex-col md:flex-row md:items-center">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          360 customer view
        </h2>
        <p className="text-lg mb-8">
          View all customer touchpoints from across communication channels in a
          unified customer profile. Empower marketing and sales collaboration
          like never before.
        </p>
        <a href="/demo" className="inline-block bg-[#0a6e4d] text-white px-6 py-3 rounded-md font-medium">
          Get a demo
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="absolute -top-10 left-0 right-0 bg-white rounded-lg shadow-lg p-3 z-20">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="py-3">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  AS
                </div>
                <div>
                  <p className="font-medium">Andrew Smith</p>
                  <p className="text-xs text-gray-500">
                    Customer since: November 30, 2023
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-gray-500">EMAIL</p>
                  <p>andrew@company.com</p>
                </div>
                <div>
                  <p className="text-gray-500">PHONE</p>
                  <p>+1 555-123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <img src="/Screenshot_2025-03-07_202713.png" alt="People looking at tablet" className="rounded-lg z-10 relative mt-16" />
        </div>
      </div>
    </section>;
};
export default CustomerView;