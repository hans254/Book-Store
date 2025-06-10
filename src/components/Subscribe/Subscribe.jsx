import React from 'react';
import Banner from '../../assets/banner.jpg';
import Playstore from '../../assets/playstore.jpeg';
import AppStore from '../../assets/Appstore.png';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '120%',
    width: '100%',
}

const Subscribe = () => {
  return (
    <div 
    data-aos="zoom-in"
    className='mb-20 bg-gray-100 dark:bg-gray-800 text-white'
    style={BannerImg}
    >
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 
            className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'
            >Read Books at Your Fingertips
            </h1>
            <div className='flex gap-8'>
                <div>
                    <img 
                    className='rounded-xl h-[80px] w-full mx-auto'
                    src={Playstore} alt="" />
                </div>
                <div>
                    <img 
                    className='rounded-xl h-[80px] w-full mx-auto'
                    src={AppStore} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
