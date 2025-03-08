import React from "react";
import { ChevronDownIcon, GlobeIcon } from "lucide-react";
const Header = () => {
  return <header className="w-full px-4 py-4 bg-[#e6ffcc] flex items-center justify-between md:px-16 lg:px-24">
      <div className="flex items-center">
        <a href="/" className="text-4xl font-bold text-[#0a866c]">
          Brevo
        </a>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <div className="flex items-center">
          <span className="text-lg font-medium">Products</span>
          <ChevronDownIcon className="ml-1 h-5 w-5" />
        </div>
        <a href="/pricing" className="text-lg font-medium">
          Pricing
        </a>
        <div className="flex items-center">
          <span className="text-lg font-medium">Resources</span>
          <ChevronDownIcon className="ml-1 h-5 w-5" />
        </div>
      </nav>
      <div className="flex items-center space-x-3">
        <GlobeIcon className="h-6 w-6" />
        <a href="/login" className="text-[#0a866c] underline hidden md:block">
          Log in
        </a>
        <a href="/signup" className="hidden md:block bg-[#0a6e4d] text-white px-4 py-2 rounded-md font-medium">
          Sign Up Free
        </a>
        <a href="/demo" className="bg-white border border-[#0a6e4d] text-[#0a6e4d] px-4 py-2 rounded-md font-medium">
          Get a demo
        </a>
      </div>
    </header>;
};
export default Header;