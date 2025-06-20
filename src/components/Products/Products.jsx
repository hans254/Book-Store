import React from 'react';
import { FaStar } from 'react-icons/fa6';
import Img1 from '../../assets/Nigeria.jpeg';
import Img2 from '../../assets/Ease.jpeg';
import Img3 from '../../assets/Things.jpeg';
import Img4 from '../../assets/Dan.png';
import Img5 from '../../assets/Richdad.jpeg';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "The Trouble with Nigeria",
        ratings: 5.0,
        color: "White",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Img2,
        title: "No Longer at Ease",
        ratings: 4.5,
        color: "Red",
        aosDelay: "200"
    },
    {
        id: 3,
        img: Img3,
        title: "Things Fall Apart",
        ratings: 4.7,
        color: "brown",
        aosDelay: "400"
    },
    {
        id: 4,
        img: Img4,
        title: "Unlock IT",
        ratings: 4.4,
        color: "Yellow",
        aosDelay: "600"
    },
    {
        id: 5,
        img: Img5,
        title: "Rich Dad Poor Dad",
        ratings: 4.5,
        color: "Pink",
        aosDelay: "800"
    }
];

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* Header Section */}
        <div className='
        text-center mb-10 max-w-[600px] 
        mx-auto'>
            <p className='text-sm text-primary'>Top Selling Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, natus?</p>
        </div>
        {/* Body Setion */}
        <div>
            <div className='items-center flex gird grid-cols-1 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5 gap-20 place-items-center'>
                {/* Card Section */}
                {
                    ProductsData.map((data) => (
                        <div 
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={data.id}
                        className='space-y-3'
                        >
                            <img src={data.img} alt=""
                            className='h-[220px] w-[150px]
                            object-cover rounded-md' />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className="text-sm text-gray-600">{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-500' />
                                    <p>{data.ratings}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* View all Button */}
            <div className="flex justify-center">
                <button
                className=' text-center mt-10 cursor-pointer bg-primary text-white py-1 
                px-5 rounded-md'
                >View All Button</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
