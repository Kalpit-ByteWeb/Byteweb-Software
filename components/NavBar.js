import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <header className="text-gray-600 body-font bg-byteweb-software-gradient">
    <div className="container mx-auto flex flex-wrap py-4 flex-col md:flex-row items-center">
        <div className="container flex-1">
            <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src="/ByteWeb-Software-Logo.svg" alt="" />
            </Link>
        </div>
        <div className="container flex-1">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

          <Link href="/" className="font-heading text-sm mr-5 text-white">Home</Link>
          <Link href="/product" className="font-heading text-sm mr-5 text-white">Product</Link>
          <Link href="/services" className="font-heading text-sm mr-5 text-white">Services</Link>
          <Link href="/about-us" className="font-heading text-sm mr-5 text-white">About-Us</Link>
          <Link href="/blog" className="font-heading text-sm mr-5 text-white">Blog</Link>
        
    </nav>
        </div>
        <div className="container flex-1 text-right">
            <Link href="/contact-us" className="font-heading py-3.5 px-5 text-white font-semibold rounded-lg shadow-button-box-shadow bg-buttonbackground">Contact us</Link>
        </div>
        </div>

  </header>
  )
}

export default NavBar