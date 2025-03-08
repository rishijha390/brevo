import React from "react";
import { TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon, FacebookIcon } from "lucide-react";
const Footer = () => {
  return <footer className="w-full px-4 py-12 bg-[#e6ffcc] md:px-16 lg:px-24">
      <div className="mb-12">
        <a href="/" className="text-4xl font-bold text-[#0a866c]">
          Brevo
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        <div>
          <h4 className="font-bold mb-4">PRODUCT</h4>
          <ul className="space-y-2">
            <li>
              <a href="/why-brevo" className="text-gray-600 hover:text-gray-900">
                Why Brevo?
              </a>
            </li>
            <li>
              <a href="/email-marketing" className="text-gray-600 hover:text-gray-900">
                Email marketing
              </a>
            </li>
            <li>
              <a href="/transactional" className="text-gray-600 hover:text-gray-900">
                Transactional email
              </a>
            </li>
            <li>
              <a href="/wallet" className="text-gray-600 hover:text-gray-900">
                Wallet
              </a>
            </li>
            <li>
              <a href="/enterprise" className="text-gray-600 hover:text-gray-900">
                Enterprise solution
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">COMPARE</h4>
          <ul className="space-y-2">
            <li>
              <a href="/vs-mailchimp" className="text-gray-600 hover:text-gray-900">
                Brevo vs Mailchimp
              </a>
            </li>
            <li>
              <a href="/vs-hubspot" className="text-gray-600 hover:text-gray-900">
                Brevo vs HubSpot
              </a>
            </li>
            <li>
              <a href="/vs-constant-contact" className="text-gray-600 hover:text-gray-900">
                Brevo vs Constant Contact
              </a>
            </li>
            <li>
              <a href="/vs-klaviyo" className="text-gray-600 hover:text-gray-900">
                Brevo vs Klaviyo
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">RESOURCES</h4>
          <ul className="space-y-2">
            <li>
              <a href="/help" className="text-gray-600 hover:text-gray-900">
                Help center
              </a>
            </li>
            <li>
              <a href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="/developers" className="text-gray-600 hover:text-gray-900">
                Developers
              </a>
            </li>
            <li>
              <a href="/status" className="text-gray-600 hover:text-gray-900">
                Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">PARTNERS</h4>
          <ul className="space-y-2">
            <li>
              <a href="/partners" className="text-gray-600 hover:text-gray-900">
                All partner programs
              </a>
            </li>
            <li>
              <a href="/affiliates" className="text-gray-600 hover:text-gray-900">
                Affiliates
              </a>
            </li>
            <li>
              <a href="/solutions" className="text-gray-600 hover:text-gray-900">
                Solutions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">COMPANY</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-600 hover:text-gray-900">
                About us
              </a>
            </li>
            <li>
              <a href="/careers" className="text-gray-600 hover:text-gray-900">
                Careers
              </a>
            </li>
            <li>
              <a href="/press" className="text-gray-600 hover:text-gray-900">
                Press
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <div className="flex space-x-6">
          <TwitterIcon className="w-6 h-6" />
          <LinkedinIcon className="w-6 h-6" />
          <InstagramIcon className="w-6 h-6" />
          <YoutubeIcon className="w-6 h-6" />
          <FacebookIcon className="w-6 h-6" />
        </div>
        <div className="text-sm text-gray-600">
          © Brevo 2024. All rights reserved
        </div>
      </div>
    </footer>;
};
export default Footer;