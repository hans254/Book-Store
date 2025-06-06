import React , { useState } from 'react';
import Ngugi from '../../assets/Ngugi.jpeg'



const Hero = () => {
    const [imageId, setImageId] = useState(Ngugi);
    const [title, setTitle] = useState('I Will Marry When I Want!!!');
    const [description, setDescription] = useState(`I Will Marry When I Want is a powerful play by renowned 
    Kenyan writer Ngũgĩ wa Thiong’o, co-authored with Ngũgĩ wa Mirii. Set in post-colonial Kenya, the 
    play explores themes of class struggle, land ownership, religious hypocrisy, and cultural identity. 
    It follows the life of Kĩgũũnda, a poor farmer, and his family as they are manipulated and exploited by 
    wealthy landowners and missionaries under the guise of modernization and Christian values. Through its 
    compelling dialogue and symbolism, the play critiques neocolonialism and challenges the injustices faced 
    by ordinary Kenyans. Originally written in Kikuyu and performed by local communities, the work underscores 
    the importance of cultural heritage and resistance in the face of oppression.`);

    const bgImage = {
        backgroudImage: 'url(${Vector})',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width:"100",
    };

  return (
    <div className='min-h-[550px] sm:min-h-[650] bg-gray-100
    flex justify-center items-center dark:bg-gray-950 dark:text-white
    duration-200'>
      <div>
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text Content Section */}
                <div>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                        {title}
                        <p className='bg-clip-text text-transparent bg-gradient-to-b
                        text-primary text-right text-sm'>
                            by Prof. Ngugi Wa Thiong'o
                        </p>
                    </h1>
                    <p className='text-sm'>
                        {description}
                    </p>
                    <div>
                        <button className='bg-gradient-to-r bg-primary text-white
                        px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200
                        font-bold
                        '>
                            Order Now
                        </button>
                    </div>
                </div>
                {/* Image Section */}
                <div className='min-h-[450px] flex justify-center items-center
                relative order-1 sm:order-2'>
                    <div className='h-[300px] sm:h-[450px] overflow-hidden
                    flex justify-center items-center
                    '>
                        <img src={imageId} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
