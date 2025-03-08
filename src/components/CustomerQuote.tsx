import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
const CustomerQuote = () => {
  return <section className="w-full px-4 py-12 bg-[#e6ffcc] md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <a href="/stories" className="inline-block bg-[#0a6e4d] text-white px-6 py-3 rounded-md font-medium mb-12">
          Read all customer stories
        </a>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-12">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <div>
              <img src="/Screenshot_2025-03-07_202907.png" alt="Kevin Yen" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Kevin Yen</h3>
              <p className="text-gray-600 mb-8">Head of Growth at AI Camp</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(5)].map((_, i) => <button key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#0a6e4d]" : "bg-gray-300"}`} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default CustomerQuote;