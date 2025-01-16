import React from 'react'
import Image from 'next/image'

const OurProcess = () => {
  return (
    <section className="py-88">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="font-heading text-sm font-semibold mb-2 text-secondary">
                Our Process
            </h2>
            <h2 className="w-7/12 mb-6 font-bold text-[52px] text-secondary leading-[62px] font-heading">
                Why Choose Byteweb for your <span className="text-transparent bg-clip-text bg-heading-gradient-color">Custom Software Needs?</span>
            </h2>
            <p className="w-3/5 text-body font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesentsagittis, ut diam diam odio faucibus lorem. Sollicitudin faucibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent
            sagittis, ut diam diam odio faucibus lorem. Sollicitudin faucibus..
            </p>
        </div>


        {/* Features Grid */}
        <div className="w-[1208px] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="border-[#E3F0FF] rounded-[30px] border p-8 flex gap-6 shadow-feature-box">
              {/* Icon */}
              <div className='mb-6 flex justify-center'>
                <Image 
                src="/Feature-icon.svg"
                width={85}
                height={85}
                alt="product-placeholder"
                />
              </div>
            <div className="w-fit">
              {/* Title */}
              <h3 className="text-lg font-heading font-semibold mb-4">
                Interactive Learning
              </h3>

              {/* Description */}
              <p className="text-body">
                VR projects can be accessed seamlessly across multiple
                platforms, including VR-enabled devices and smartphones.
              </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default OurProcess