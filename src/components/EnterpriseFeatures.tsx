import React from "react";
const FeatureCard = ({
  title,
  description
}) => {
  return <div className="mb-12">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>;
};
const EnterpriseFeatures = () => {
  return <section className="w-full px-4 py-12 bg-[#e6ffcc] md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Explore our Enterprise Solution
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8">
        <FeatureCard title="Marketing Platform" description="Drive conversions with multi-channel campaigns and marketing automation." />
        <FeatureCard title="Customer Data Platform" description="Activate multi-channel strategies using unified data in your marketing and sales efforts." />
        <FeatureCard title="Messaging API" description="Send all your transactional messages instantly, and securely with 99.9% uptime." />
        <FeatureCard title="Web and mobile push" description="Ignite interest and catalyze conversions with web and mobile push notifications." />
        <FeatureCard title="Wallet" description="Connect easily with your customers via their integrated Apple and Google wallets." />
        <FeatureCard title="Retail & e-commerce" description="An easy-to-use commerce solution to create a personalized buying experience." />
        <FeatureCard title="Data security & privacy" description="Multi-layered data security framework ensures our products and your data are secure." />
        <FeatureCard title="Dedicated customer support" description="24/7 support with 1 hour guaranteed response times and a dedicated success manager." />
        <FeatureCard title="Sub-account management" description="Manage multiple business units, billing, and users from one place." />
      </div>
    </section>;
};
export default EnterpriseFeatures;