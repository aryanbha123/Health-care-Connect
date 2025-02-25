import React, { useEffect, useState } from 'react';
import HealthCareSection from '../sections/HealthCareSection';
import HeroSection from '../sections/Hero';
import Features from '../sections/Features';
import AboutSection from '../sections/About';

const Home = () => {
    const [isShow, setShow] = useState(true);
    useEffect(()=> {
        setTimeout(()=>{
            setShow(false)
        },4000)
    } ,[]);
    return (
        <div>

            {isShow &&

                <div className="h-screen w-screen z-50 fixed left-0 top-0 flex justify-center items-center backdrop-blur-sm">
                    <img
                        className=" object-contain rounded-full  shadow-blue-500/50 "
                        src="/assets/Untitled-design-unscreen.png"
                        alt="Loading Animation"
                    />
                </div>
            }

            <HeroSection />
            <AboutSection/>
            <HealthCareSection />
            <Features />
        </div>
    );
}

export default Home;
