import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
const Header = () => {
    return (
        <>
            <header className='h-[70px] left-0 top-0 w-full fixed bg-white' >
                <nav className='h-[70px] w-full flex items-center justify-between bg-white px-5 shadow'>
                    <div className='flex items-center' >
                        <img src="/logo/image.png" className='h-12' alt="" />
                        <img src="/logo/logo2.png" className='h-7' alt="" />
                    </div>
                    <div>
                        <ScrollLink />
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
