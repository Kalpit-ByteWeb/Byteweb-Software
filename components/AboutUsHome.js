// components/AboutUs.js
import React from "react";
import Link from "next/link";

const AboutUsHome = () => {
  return (
    <section className="py-88">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5  gap-[4rem]">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/About-us-home-image.webp" // Replace with your actual image path
            alt="Team Working"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h3 className="font-heading font-semibold text-sm text-secondary mb-2">About Us</h3>
          <h2 className="font-heading text-base leading-50 font-bold mb-4">
            We are a team of talented and <span className="text-transparent bg-clip-text bg-heading-gradient-color">passionate developers.</span>
          </h2>
          <p className="font-body text-secondary mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinarproin viverra ullamcorper ac, eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus ante velit nunc morbi pretium. Ut Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinarproin viverra ullamcorper ac, eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus ante velit nunc morbi pretium. Ut velit nunc morbi pretium. Ut nullam dolor, pulvinarproin viverra ullamcorper ac, eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus ante velit nunc morbi pretium. Ut 
          </p>
          <div className="flex space-x-4">
            <Link href="/contact-us" legacyBehavior>
              <a className="bg-buttonbackground font-heading  text-white Btn">
                Contact us
              </a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className="bg-transparent font-heading  border-buttonbackground border text-buttonbackground Btn">
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
