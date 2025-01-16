import React from 'react'
import Link from 'next/link'
import Button from "../components/Button"

const data = await fetch("http://127.0.0.1:1337/api/pages?sort=createdAt:asc")

const response = await data.json()
console.log(response)

const NavBar = () => {
    const pages = response.data.sort((a, b) => {
        // Ensure the home page (Slug === null) is always first
        if (a.Slug === null) return -1;
        if (b.Slug === null) return 1;
        return 0;
      });
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
      {pages.map((data) => {
        const slug = data.Slug || "";
        const href = slug === "" ? "/" : `/${slug}`;

        return (
          <Link key={data.id} href={href} className="mr-5 text-white">
            {data.PagesNames}
          </Link>
        );
      })}
    </nav>
        </div>
        <div className="container flex-1 text-right">
            <Link href="/contact-us" className="py-3.5 px-5 text-white font-semibold rounded-lg shadow-button-box-shadow bg-buttonbackground">Contact us</Link>
        </div>
        </div>

  </header>
  )
}

export default NavBar