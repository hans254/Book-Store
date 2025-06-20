import React from 'react';
import BannerImg from '../../assets/library.jpg';
import { GrSecure} from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';


const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center
    py-2 sm:py-0'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2
        gap-6 items-center">
            {/* Image Section */}
            <div data-aos="zoom-in">
                <img 
                className='max-w-[400px] h-[350px] w-full mx-auto
                drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-xl'
                src={BannerImg} alt="" />
            </div>
            {/* Text Section */}
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
                    Library at your fingertips
                </h1>
                <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsum aliquam quo sunt omnis! Non fuga enim quam recusandae 
                    nobis aspernatur laboriosam distinctio nihil, harum quos ut aliquid 
                    est quae veritatis.
                </p>
                <div className="flex gap-4 flex-col">
                    <div data-aos="fade-up" className="flex gap-4 items-center">
                        <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4
                        rounded-full bg-violet-100 dark:bg-violet-400' />
                        <p>Quality Books</p>
                    </div>
                    <div data-aos="fade-up" className="flex gap-4 items-center">
                        <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4
                        rounded-full bg-orange-100 dark:bg-orange-400' />
                        <p>Fast Delivery</p>
                    </div>
                    <div data-aos="fade-up" className="flex gap-4 items-center">
                        <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4
                        rounded-full bg-green-100 dark:bg-green-400' />
                        <p>Easy Payment Method</p>
                    </div>
                    <div data-aos="fade-up" className="flex gap-4 items-center">
                        <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4
                        rounded-full bg-yellow-100 dark:bg-yellow-400' />
                        <p>Get Offers on Books</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
