import React from 'react'
import Logo from '../../assets/Logo.png';
import { FaCaretDown } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const Menu = [
    {
        id: 1,
        name: 'Home',
        link: '/#',
    },
    {
        id: 2,
        name: 'Best Seller',
        link: '/#services',
    }
];

const DropdownLinks = [
    {
        name: 'Trending Books',
        link: '/#',
    },
    {
        name: 'Best Selling',
        link: '/#',
    },
    {
        name: 'Authors',
        link: '/#',
    }
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className='shadow-lg'>
      <div className="container py-3 sm:py-0">
        <div className="flex items-center justify-between h-16">
            <div>
                <a href="#"
                className='font-bold text-2xl sm:text-3xl flex gap-2'
                >
                    <img src={ Logo } alt="Logo" className="w-20 h-20" />
                    Books
                </a>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <ul className="flex gap-4 items-center hidden sm:flex">
                    {
                        Menu.map((menu) => (
                            <li>
                                <a href={menu.link}
                                className='inline-block py-4 hover:text-primary
                                duration-200'
                                >
                                    {menu.name}
                                </a>
                            </li>
                        ))
                    }
                    {/* Dropdown Section */}
                    <li className='group relative cursor-pointer'>
                        <a href="#" 
                        className='flex h-[72px] items-center gap[2px]'
                        >
                            Quick Links
                            <span>
                                <FaCaretDown 
                                className='transition duration-300 group-hover:rotate-180'
                                />
                            </span>
                        </a>
                        {/* Dropdown Links Section */}
                        <div className="absolute -left-9 z-[10] hidden
                        group-hover:block text-black bg-white p-1 shadow-md">
                            <ul>
                                {
                                    DropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link}
                                            className='inline-block w-full rounded-md
                                            p-2 hover:bg-primary/20'
                                            >
                                                {data.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
                <button
                className='bg-gradient-to-r bg-primary font-bold text-white
                px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300'
                onClick={handleOrderPopup}
                >Order
                <FaCartShopping 
                className='text-xl text-white drop-shadow-sm cursor-pointer'
                />
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
