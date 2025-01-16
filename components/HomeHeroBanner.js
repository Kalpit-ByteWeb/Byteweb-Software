// components/HeroBanner.js
import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="bg-byteweb-software-gradient h-[1049px]">
      <div className="container mx-auto flex flex-col md:flex-row py-88">
        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-base font-semibold mb-2 text-white">
            Software agency
          </h1>
          <h2 className="text-banner-heading-size font-bold mb-4 leading-80 text-white">
            We are a top-notch <span className="text-transparent bg-clip-text bg-heading-gradient-color">Software agency.</span>
          </h2>
          <p className="text-lg mb-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            ante velit nunc morbi pretium.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="/contact-us" legacyBehavior>
              <a className="bg-primary text-white font-medium py-4 px-8 rounded-lg shadow-button-box-shadow-2">
                Contact Us
              </a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className="bg-transparent  border-primary border text-primary font-medium py-4 px-8 rounded-lg shadow-button-box-shadow-2">
                Our Services
              </a>
            </Link>
          </div>
        </div>
        {/* Image Section */}
        <div className="md:mt-0 absolute top-[184px] right-[98px]">
          <img
            src="/HomeHeroBanner-Image.svg" // Replace with your actual image path
            alt="Hero Banner"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
