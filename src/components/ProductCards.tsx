import React from "react";
import { MessageSquareIcon, BarChart2Icon, UsersIcon } from "lucide-react";
const ProductCard = ({
  title,
  description,
  features,
  buttonColor,
  icon: Icon
}) => {
  return <div className="border border-gray-200 rounded-lg p-6 flex flex-col h-full">
      <div className="mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="mb-6 flex-grow">
        <p className="font-medium mb-2">Top features:</p>
        <ul className="space-y-2">
          {features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
      </div>
      <button className={`w-full py-3 px-4 rounded-md text-white ${buttonColor}`}>
        Find out more
      </button>
    </div>;
};
const ProductCards = () => {
  return <section className="w-full px-4 py-12 bg-[#e6ffcc] md:px-16 lg:px-24">
      <div className="grid md:grid-cols-3 gap-8">
        <ProductCard title="Marketing Platform" description="Increase conversions with multi-channel campaigns and marketing automation" features={["Email marketing", "Marketing automation", "SMS & WhatsApp campaigns"]} buttonColor="bg-[#6366f1]" icon={MessageSquareIcon} />
        <ProductCard title="Messaging API" description="Deliver individual messages at scale and on time with our powerful API" features={["Email, SMS & WhatsApp API", "CMS integration", "Inbound parsing"]} buttonColor="bg-[#0a6e4d]" icon={BarChart2Icon} />
        <ProductCard title="Customer Data Platform" description="Unify, manage and sync customer data to accelerate your time-to-value" features={["Multi-table data model", "Scoring Library", "Customer Analytics & BI"]} buttonColor="bg-[#3b82f6]" icon={UsersIcon} />
      </div>
    </section>;
};
export default ProductCards;