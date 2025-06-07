import React, { useState } from 'react';
import Ngugi from '../../assets/Ngugi.jpeg';
import backgroundImage from "../../assets/background.jpg";
import Petals from '../../assets/Petals.jpg';
import Weep from '../../assets/weep.jpeg';
import River from '../../assets/River.jpeg';

const ImageList = [
    {
        id: 1,
        img: Petals,
        title: 'Petals of Blood',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia quibusdam quasi commodi, necessitatibus quos consequatur, iure laboriosam repudiandae earum id omnis fugit nobis est magni. Doloribus ipsum consectetur magnam, explicabo facilis soluta a expedita consequatur. Eveniet facere dignissimos obcaecati!',
    },
    {
        id: 2,
        img: Weep,
        title: 'Weep Not, Child',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia quibusdam quasi commodi, necessitatibus quos consequatur, iure laboriosam repudiandae earum id omnis fugit nobis est magni. Doloribus ipsum consectetur magnam, explicabo facilis soluta a expedita consequatur. Eveniet facere dignissimos obcaecati!',
    },
    {
        id: 3,
        img: River,
        title: 'A Grain of Wheat',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia quibusdam quasi commodi, necessitatibus quos consequatur, iure laboriosam repudiandae earum id omnis fugit nobis est magni. Doloribus ipsum consectetur magnam, explicabo facilis soluta a expedita consequatur. Eveniet facere dignissimos obcaecati!',
    }
]

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

  // Corrected: use backticks ` for template string and corrected typo 'backgroudImage' to 'backgroundImage'
  const bgImage = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  };

  return (
    <div
      className='min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'
      style={bgImage} 
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text Content Section */}
          <div>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
              {title}
              <p className='bg-clip-text text-transparent bg-gradient-to-b from-primary to-blue-600 text-right text-sm'>
                by Prof. Ngugi wa Thiong'o
              </p>
            </h1>
            <p className='text-base mt-4 leading-relaxed font-serif font-light  font-merri text-gray-800 dark:text-gray-300'>
            {description}
            </p>

            <div>
              <button className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 font-bold'>
                Order Now
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className='min-h-[450px] flex justify-center items-center 
          relative order-1 sm:order-2
          '>
            {/* Main Image */}
            <div className='h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center'>
              <img src={imageId} alt="Ngugi wa Thiong'o" 
              className='object-contain w-[400px] h-[400px]
              sm:w-[450px] sm:h-[450px] sm:scale-125
              mx-auto'
              />
            </div>
            {/* Other Images */}
            <div
            className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2
            lg:py-2 justify-center gap-4 absolute -bottom-[40px]
            lg:-right-1 bg-white rounded-full'
            >
                {
                    ImageList.map((data) => (
                        <img src={data.img} alt="Ngugi wa Thiong'o" 
                        className='max-w-[100px] h-[100px] object-contain
                        inline-block hover:scale-110 duration-200'
                        onClick={
                            () =>{
                                setImageId(
                                    data.id === 1?
                                    Petals: data.id === 2?
                                    Weep: River
                                );
                                setTitle(data.title);
                                setDescription(data.description);
                            }
                        }
                        />
                    ))
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
