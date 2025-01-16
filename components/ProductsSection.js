import React from 'react'
import Link from "next/link";
import Image from 'next/image'

const ProductsSection = () => {
  return (
    <div> <section className="bg-byteweb-software-gradient py-88">
    <div className="container mx-auto">
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[48px]">
        <div>
        <h2 className="font-heading text-sm font-semibold mb-2 text-white">
            Products
          </h2>
          <h2 className="font-heading text-base leading-50 font-bold mb-4 text-white">
          We are development experts on all<span className="text-transparent bg-clip-text bg-heading-gradient-color"> technologies & platforms.</span>
          </h2>
          <p className="font-body text-sm mb-4 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinarproin viverra ullamcorper ac, eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus ante velit nunc morbi pretium. Ut Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinarproin viverra ullamcorper ac, eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus ante velit nunc morbi pretium. Ut velit nunc morbi pretium. Ut nullam dolor, pulvinarproin viverra ullamcorper ac, eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus ante velit nunc morbi pretium. Ut 
          </p>
        </div>
        {[1, 2, 3].map((item, index) => (
          <div
            key={index} 
            className="overflow-hidden"
          >
            {/* Image Placeholder */}
            <div>
              <Image 
              src="/tapect-placeholder.png"
              width={500}
              height={500}
            alt="product-placeholder"
            className="w-full"
            />
            </div>

            {/* Content */}
            <div className="pt-[32px]">
              <h3 className="font-heading text-lg text-white mb-4 font-bold">Tapect</h3>
              <p className="font-body text-white mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinarproin viverra ullamcorper ac, eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus ante velit nunc morbi pretium. Ut 
              </p>
              <Link href="#"className="font-heading flex w-fit gap-[8px] bg-white text-secondary Btn">
                Learn More <Image src="/btn-arrow.svg" width={20} height={20} alt="btn-arrow" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section></div>
  )
}

export default ProductsSection