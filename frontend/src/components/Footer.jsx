import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          {/*--------Left Side---------*/}
          <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-800 leading-6'>this is th </p>
          </div>
           {/*--------Center Side---------*/}
           <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-800'>
                <li>Home</li>
                <li>About</li>
                <li>Conatct us</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
             {/*--------Right Side---------*/}
          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-800'>
                <li>7899817908</li>
                <li>sudhu4007@gmail.com</li>
            </ul>
            </div>
      </div>
      {/*-----Copyright----*/}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024 @ - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
