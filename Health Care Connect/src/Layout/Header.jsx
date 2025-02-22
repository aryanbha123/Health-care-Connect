import { IconButton } from '@mui/material';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {Help} from '@mui/icons-material'
const Header = () => {

    return (
        <>
            <header className='h-[70px] left-0  Z-40 top-0 w-full relative bg-white' >
                <nav className='h-[70px] z-40 w-full flex items-center fixed justify-between bg-white px-5 shadow-md'>
                    <div className='flex items-center' >
                        <img src="/logo/image.png" className='h-12' alt="" />
                        <img src="/logo/logo2.png" className='h-7' alt="" />
                    </div>
                    <div className='flex   items-center gap-5 text-sm'>
                        <ScrollLink className='cursor-pointer'>Home</ScrollLink>
                        <ScrollLink className='cursor-pointer'>About</ScrollLink>
                        <ScrollLink className='cursor-pointer'>Services</ScrollLink>
                        <ScrollLink className='cursor-pointer'>Connect</ScrollLink>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
