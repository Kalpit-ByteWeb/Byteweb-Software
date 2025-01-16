import React from 'react'
import Image from 'next/image'

const FeaturesSection = () => {
  return (
    <section className="py-88">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-12">
        <div className="text-center md:text-left">
          <h2 className="font-bold text-[52px] text-secondary leading-[62px] font-heading">
          Why Choose Byteweb for your <span className="text-transparent bg-clip-text bg-heading-gradient-color">Custom Software Needs?</span>
          </h2>
        </div>
        <div className="content-center">
          <p className="text-body font-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesentsagittis, ut diam diam odio faucibus lorem. Sollicitudin faucibusLorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent
          sagittis, ut diam diam odio faucibus lorem. Sollicitudin faucibus..
          </p>
        </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="border-[#E3F0FF] rounded-[30px] border p-8 shadow-feature-box">
              {/* Icon */}
              <div className='mb-6 flex justify-center'>
                <Image 
                src="/Feature-icon.svg"
                width={85}
                height={85}
                alt="product-placeholder"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-heading font-semibold text-center mb-4">
                Interactive Learning
              </h3>

              {/* Description */}
              <p className="text-body text-center">
                VR projects can be accessed seamlessly across multiple
                platforms, including VR-enabled devices and smartphones.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection