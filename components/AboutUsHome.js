// components/AboutUs.js
import React from "react";
import Link from "next/link";

const AboutUsHome = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/About-us-home-image.webp" // Replace with your actual image path
            alt="Team Working"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10">
          <h3 className="text-lg text-gray-500 mb-2">About Us</h3>
          <h2 className="text-4xl font-bold mb-4">
            We are a team of talented and <span className="text-transparent bg-clip-text bg-heading-gradient-color">passionate developers.</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            ante velit nunc morbi pretium. Ut nullam dolor, pulvinarproin
            viverra ullamcorper ac, eget. Lorem ipsum dolor sit amet.
          </p>
          <div className="flex space-x-4">
            <Link href="/contact-us" legacyBehavior>
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg">
                Contact us
              </a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className="bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg">
                Our Services
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
