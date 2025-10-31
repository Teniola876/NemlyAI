
import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaRegLightbulb } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Waitlist = () => {
  return (
    <div>
      <div className='w-full max-w-6xl mx-auto'>
        <motion.section
          className='mx-2 bg-black text-white h-145 rounded-xl mt-6 flex flex-col items-center text-center space-y-10 justify-center'
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <h1 className='text-4xl md:text-5xl max-w-4xl font-medium px-4 md:px-0'>Unlock Your Business Potential With Nemly</h1>
          <p className='lg:text-lg max-w-5xl px-5 md:px-3 lg:px-0'>
            Nemly is your all-in-one Al platform, providing innovative content ideas, actionable marketing tips, and streamlined
            invoice management to help your business thrive in the dynamic Nigerian market.
          </p>
          <button className='py-3 md:py-4 px-6 md:px-8 font-medium bg-orange-500 rounded-xl'>Get Started</button>
        </motion.section>

        <main className='px-3 pb-30 mt-14 '>
          <motion.div
            variants={fadeInUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-medium text-center md:text-left'>Key Features</h2>
            <p className='max-w-xl mt-3 text-center md:text-left'>
              Nemly offers a suite of powerful tools designed to boost your business's efficiency and growth
              in Nigeria's fast-paced economy.
            </p>
          </motion.div>

          <motion.div
            className='flex flex-col md:flex-row md:flex mt-10 md:gap-2 lg:gap-8 space-y-5 items-center justify-center'
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {[1, 2, 3].map((_, i) => (
              <motion.div key={i} variants={fadeInUp} className='border border-gray-300 rounded-md p-5 w-fit max-w-lg space-y-3'>
                <div className='text-xl'><FaRegLightbulb /></div>
                <h3 className='text-xl font-medium'>Content Idea Generator</h3>
                <p>
                  Generate fresh and engaging content
                  ideas tailored to your industry and target
                  audience in Nigeria.
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className='mt-10'
            variants={fadeInUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-medium mb-10 text-center md:text-left'>Testimonials</h2>
            <motion.section
              className='flex flex-col md:flex-row md:flex mt-10 md:gap-2 lg:gap-8 space-y-10 md:space-y-0 items-center justify-center'
              variants={staggerContainer}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              {[1, 2, 3].map((_, i) => (
                <motion.div key={i} variants={fadeInUp} className='max-w-sm'>
                  <div className='w-full h-70 bg-black rounded-lg'></div>
                  <div>
                    <p className='text-lg mt-4'>
                      "Nemly has revolutionized our content
                      creation process. We're consistently
                      generating high-quality content that
                      resonates with our audience."
                    </p>
                    <p>
                      Aisha, Marketing Manager at Tech Innovators Inc.
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.section>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-medium mb-10 text-center md:text-left mt-10'>Pricing Plans</h2>
            <motion.section
              className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-3 w-fit mx-auto'
              variants={staggerContainer}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              {/* {[1, 2, 3].map((_, i) => ( */}
                <motion.div variants={fadeInUp} className='border border-gray-300 rounded-lg max-w-sm p-5 col-span-1'>
                  <div className='text-xl font-medium'>Free</div>
                  <div className='my-3'>
                    <span className='text-5xl font-medium'>0</span> <span className='text-lg font-medium'>/month</span>
                  </div>
                  <button className="w-full py-3 rounded-xl font-medium bg-gray-200">Choose Free</button>
                  <div className='my-5 space-y-3'>
                    <div className='flex space-x-4 items-center'><FaCheck /> <div>Basic Content Ideas</div></div>
                    <div className='flex space-x-4 items-center'><FaCheck /> <div>Limited Marketing Tips</div></div>
                    <div className='flex space-x-4 items-center'><FaCheck /> <div>Basic Invoice Management</div></div>
                  </div>
                </motion.div>

                <motion.div  variants={fadeInUp} className='border border-gray-300 rounded-lg max-w-sm p-5 col-span-1'>
                  <div className='text-xl font-medium'>Free</div>
                  <div className='my-3'>
                    <span className='text-5xl font-medium'>3000</span> <span className='text-lg font-medium'>/month</span>
                  </div>
                  <button className="w-full py-3 rounded-xl font-medium bg-gray-200">Choose Free</button>
                  <div className='my-5 space-y-3'>
                    <div className='flex space-x-4 items-center'><FaCheck /> <div>Basic Content Ideas</div></div>
                    <div className='flex space-x-4 items-center'><FaCheck /> <div>Limited Marketing Tips</div></div>
                    <div className='flex space-x-4 items-center'><FaCheck /> <div>Basic Invoice Management</div></div>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className='border border-gray-300 rounded-lg max-w-sm p-5 col-span-1'>
                  <div className='text-xl font-medium'>Free</div>
                  <div className='my-3'>
                    <span className='text-5xl font-medium'>5000</span> <span className='text-lg font-medium'>/month</span>
                  </div>
                  <button className="w-full py-3 rounded-xl font-medium bg-gray-200">Choose Free</button>
                  <div className='my-5 space-y-3'>
                    <div className='flex space-x-4 items-center'><FaCheck /> <div>Basic Content Ideas</div></div>
                    <div className='flex space-x-4 items-center'><FaCheck /> <div>Limited Marketing Tips</div></div>
                    <div className='flex space-x-4 items-center'><FaCheck /> <div>Basic Invoice Management</div></div>
                  </div>
                </motion.div>
              {/* ))} */}
            </motion.section>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default Waitlist
