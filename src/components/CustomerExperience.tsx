import React from "react";
import { PlusIcon } from "lucide-react";
const CustomerExperience = () => {
  return <section className="w-full px-4 py-12 bg-[#e6ffcc] md:px-16 lg:px-24 flex flex-col md:flex-row md:items-center">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Create seamless customer experiences
        </h2>
        <p className="text-lg mb-6">
          Take advantage of our many custom integrations or leverage our open
          API that makes connection to any platform possible.
        </p>
        <ul className="list-disc pl-5 mb-8">
          <li className="mb-2">Build custom automations</li>
          <li className="mb-2">Segment users</li>
          <li className="mb-2">Streamline workflows</li>
          <li className="mb-2">Enhance data accuracy & customer insights</li>
        </ul>
        <a href="/demo" className="inline-block bg-[#0a6e4d] text-white px-6 py-3 rounded-md font-medium">
          Get a demo
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative">
          <img src="/Screenshot_2025-03-07_162402.png" alt="Woman smiling" className="rounded-lg z-10 relative" />
          <div className="absolute top-1/4 -left-16 bg-[#0a6e4d] p-6 rounded-lg z-20">
            <div className="grid grid-cols-4 gap-4">
              <img src="https://cdn.worldvectorlogo.com/logos/zoom-5.svg" alt="Zoom" className="w-10 h-10" />
              <img src="https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg" alt="WordPress" className="w-10 h-10" />
              <img src="https://cdn.worldvectorlogo.com/logos/meta-1.svg" alt="Meta" className="w-10 h-10" />
              <img src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" alt="Stripe" className="w-10 h-10" />
              <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" className="w-10 h-10" />
              <img src="https://cdn.worldvectorlogo.com/logos/woocommerce.svg" alt="WooCommerce" className="w-10 h-10" />
              <img src="https://cdn.worldvectorlogo.com/logos/zendesk-1.svg" alt="Zendesk" className="w-10 h-10" />
              <img src="https://cdn.worldvectorlogo.com/logos/clickfunnels.svg" alt="ClickFunnels" className="w-10 h-10" />
              <img src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" alt="Salesforce" className="w-10 h-10" />
              <img src="https://cdn.worldvectorlogo.com/logos/zapier-1.svg" alt="Zapier" className="w-10 h-10" />
              <img src="https://cdn.worldvectorlogo.com/logos/hubspot.svg" alt="HubSpot" className="w-10 h-10" />
              <div className="flex items-center justify-center">
                <PlusIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-white text-center mt-2 text-sm">Many more</p>
          </div>
        </div>
      </div>
    </section>;
};
export default CustomerExperience;