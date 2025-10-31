import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideIn = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { x: "100%", transition: { duration: 0.3, ease: 'easeIn' } },
};

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <motion.nav
      className='border-b border-gray-300 overflow-x-hidden w-full'
      variants={fadeInDown}
      initial='hidden'
      animate='visible'
    >
      <div className='flex justify-between items-center mx-10 md:mx-10 lg:mx-20 py-3'>
        <div>Nemly</div>

        <ul className='md:flex space-x-10 font-medium items-center hidden'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li><button className='py-2 px-4 bg-orange-400 rounded-xl'>Get Started</button></li>
        </ul>

        <div className='flex items-center justify-center space-x-2 md:hidden'>
          <button className='py-2 px-4 bg-orange-400 rounded-xl'>Get Started</button>
          <div className='' onClick={() => setShow(prev => !prev)}>
            <IoMenu className='text-xl' />
          </div>
        </div>

        <AnimatePresence>
          {show && (
            <motion.ul
              key="mobile-menu"
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className='absolute right-0 bg-white py-14 top-0 w-50 shadow-md min-h-screen space-y-5 flex flex-col items-center md:hidden duration-300 z-10'
            >
              <div className='absolute top-6 right-6 text-xl' onClick={() => setShow(false)}>
                <IoMenu />
              </div>
              <li><button className='py-2 px-4 bg-orange-400 rounded-xl'>Get Started</button></li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
