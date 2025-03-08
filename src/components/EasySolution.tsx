import React from "react";
const EasySolution = () => {
  return <section className="w-full px-4 py-12 bg-[#e6ffcc] md:px-16 lg:px-24 flex flex-col-reverse md:flex-row md:items-center">
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src="/Screenshot_2025-03-07_162322.png" alt="Platform interface" className="rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          A solution everyone on your team can master — no training required
        </h2>
        <p className="text-lg mb-8">
          We pride ourselves on being the most approachable CRM. Our platform
          offers a user-friendly interface, detailed reports and drag & drop
          editors that make getting the most of your investment easy.
        </p>
        <a href="/demo" className="inline-block bg-[#0a6e4d] text-white px-6 py-3 rounded-md font-medium">
          Get a demo
        </a>
      </div>
    </section>;
};
export default EasySolution;
