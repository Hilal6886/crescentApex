import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section className="bg-n-7 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-4">Crescent Apex</h2>
            <p className="text-gray-400 mb-4">
              © {new Date().getFullYear()} Crescent Apex. All rights reserved.
            </p>
            <ul className="flex gap-4">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${item.title}`}
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transition-transform hover:scale-110"
                >
                  <img
                    src={item.iconUrl}
                    width={24}
                    height={24}
                    alt={item.title}
                    className="transition-colors hover:text-gray-400"
                  />
                </a>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 w-full md:w-auto">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="/support" className="hover:text-gray-400">Support</a></li>
              <li><a href="/portfolio" className="hover:text-gray-400">Portfolio</a></li>
              
              <li><a href="/blog" className="hover:text-gray-400">Blog</a></li>
              <li><a href="/careers" className="hover:text-gray-400">Careers</a></li>
            </ul>
          </div>

          {/* Legal Notices */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 w-full md:w-auto">
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-gray-400">Cookie Policy</a></li>
              <li><a href="/disclaimer" className="hover:text-gray-400">Disclaimer</a></li>
              <li><a href="/licenses" className="hover:text-gray-400">Licenses</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 w-full md:w-auto">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <form className="flex flex-col items-center lg:items-start gap-2 w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 w-full"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Site Map */}
        <div className="mt-10 text-center">
          <h4 className="text-lg font-semibold mb-4">Site Map</h4>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-400">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/solutions" className="hover:text-gray-300">Solutions</a></li>
            <li><a href="/case-studies" className="hover:text-gray-300">Case Studies</a></li>
            <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
            <li><a href="/careers" className="hover:text-gray-300">Careers</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="/support" className="hover:text-gray-300">Support</a></li>
            <li><a href="/portfolio" className="hover:text-gray-300">Portfolio</a></li>
            <li><a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a></li>
            <li><a href="/disclaimer" className="hover:text-gray-300">Disclaimer</a></li>
            <li><a href="/licenses" className="hover:text-gray-300">Licenses</a></li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
