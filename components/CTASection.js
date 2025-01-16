import Link from 'next/link'
import React from 'react'

const CTASection = () => {
  return (
    <section className="pb-88">
    <div className="max-w-7xl mx-auto px-6">
      <div
        className="h-[479px] p-12 bg-cover bg-center bg-cover bg-no-repeat rounded-lg shadow-lg overflow-hidden"
        style={{
          backgroundImage:
            "url('/CTA-background.jpeg')", // Replace with your actual image URL
        }}
      >
    
        <div className="bg-white/80 h-[383px] rounded-[10px] p-12 pr-32 text-white">
          {/* Subheading */}
          <p className="text-sm text-secondary font-semibold mb-2">
          Let’s get in touch
          </p>

          {/* Main Heading */}
          <h2 className="w-3/6 leading-50 text-base text-secondary font-bold mb-6">
            Ready to start working<span className="text-transparent bg-clip-text bg-heading-gradient-color"> together with us?</span>
          </h2>

          {/* Description */}
          <p className="text-secondary mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetureadipiscing elit. Convallis amet massaaliquet erat aliquet elit .Lorem ipsum dolor sit amet, consectetureadipiscing elit. Convallis amet massaaliquet erat aliquet elit .
          </p>

          {/* CTA Button */}
          <Link
            href="/contact-us"
            className="bg-buttonbackground absolute text-white Btn">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CTASection