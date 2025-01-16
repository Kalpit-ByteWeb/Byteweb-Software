import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-byteweb-software-gradient text-white py-88">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Branding Section */}
        <div className="w-fit">
            <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-2">
                <Image width={175} height={175}  src="/ByteWeb-Software-Logo.svg" alt="Byteweb-Software-logo" />
            </Link>

            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt donec.
            </p>
        </div>

        {/* Reusable Footer Link Sections */}
        <FooterLinks
        className="w-fit"
          title="Quick Links"
          links={[
            { name: "Home", href: "#" },
            { name: "Products", href: "#" },
            { name: "Contact Us", href: "#" },
            { name: "About Us", href: "#" },
            { name: "Blog", href: "#" },
          ]}
        />

        <FooterLinks
        className="w-fit"
          title="Our Products"
          links={[
            { name: "Tapect", href: "#" },
            { name: "Smartvcard", href: "#" },
            { name: "Outzy", href: "#" },
            { name: "Wbotz", href: "#" },
            { name: "WHMCS", href: "#" },
          ]}
        />

        <FooterLinks
        className="w-fit"
          title="Our Services"
          links={[
            { name: "Product Engineering", href: "#" },
            { name: "Cloud Services", href: "#" },
            { name: "Data & AI", href: "#" },
            { name: "Internet of Thing", href: "#" },
            { name: "Robotic Process Automation", href: "#" },
          ]}
        />

        {/* Newsletter */}
        <div className="w-fit">
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
              aria-label="Email"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400">
            Cookie Policy
          </a>
          <a href="#" className="hover:text-blue-400">
            Terms & Conditions
          </a>
        </div>
        <p className="text-gray-400">©bytewebsoftware. All rights reserved.</p>
      </div>
    </footer>
  )
}
// Reusable Footer Links Component
const FooterLinks = ({ title, links }) => (
    <div>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-blue-400">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

export default Footer