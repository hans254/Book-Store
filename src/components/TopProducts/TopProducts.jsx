import React from 'react';
import Img1 from '../../assets/millioniers.jpeg';
import Img2 from '../../assets/psychology.jpg';
import Img3 from '../../assets/rich.jpg';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: 'Millioniers FastLane',
        description: `Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Dolores magni cumque, 
            ducimus a commodi blanditiis dolor alias est sint maxime 
            officia sequi error fugiat dignissimos ipsum nesciunt perferendis 
            accusantium corporis.`
    },
    {
        id: 2,
        img: Img2,
        title: 'Psychology of Money',
        description: `Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Dolores magni cumque, 
            ducimus a commodi blanditiis dolor alias est sint maxime 
            officia sequi error fugiat dignissimos ipsum nesciunt perferendis 
            accusantium corporis.`
    },
    {
        id: 3,
        img: Img3,
        title: 'Think and Grow Rich',
        description: `Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Dolores magni cumque, 
            ducimus a commodi blanditiis dolor alias est sint maxime 
            officia sequi error fugiat dignissimos ipsum nesciunt perferendis 
            accusantium corporis.`
    }
];
const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className='
        mb-24  text-center mt-10 max-w-[600px]
        mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, natus?</p>
        </div>
        {/* Body Section */}
        <div data-aos="zoom-in" className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-20
        sm: grid-cols-2 md:gap-5 place-items-center">
            {
                ProductsData.map((data) => (
                    <div 
                    className='rounded-2xl bg-white dark:bg-gray-800
                    hover:bg-black/80, dark:hover:bg-primary hover:text-white
                    relative shadow-xl duration-300 group max-w-[300px]'
                    >
                        {/* Image Section */}
                        <div className='h-[180px]'>
                            <img className='rounded-md max-w-[250px] h-[250px] block mx-auto
                            transform -translate-y-20 group-hover:scale-105 duration-300
                            drop-shadow-md' 
                            src={data.img} alt="" />
                        </div>
                        {/* Details Section */}
                        <div className="p-4 text-center">
                            {/* Start ratings */}
                            <div className='w-full flex justify-center items-center gap-1'>
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                            </div>
                            <h1 className="text-1 font-bold">{data.title}</h1>
                            <p className="text-gray-500 group-hover:text-white
                            duration-300 text-sm line-clamp-2">
                                {data.description}
                            </p>
                            <button className='bg-primary hover:scale-105
                            duration-300 text-white py-1 px-4 rounded-full
                            mt-4 group-hover:bg-white group-hover:text-primary'
                            onClick={handleOrderPopup}
                            >Order Now</button>
                        </div>
                    </div>
                ))}
        </div>
      </div>
    </div>
   
   
  )
}

export default TopProducts
