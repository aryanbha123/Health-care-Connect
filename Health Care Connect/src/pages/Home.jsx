import React, { useEffect, useState } from 'react';
import HealthCareSection from '../sections/HealthCareSection';
import HeroSection from '../sections/Hero';
import Features from '../sections/Features';
import AboutSection from '../sections/About';
import Info from '../sections/Info';
import Connect from '../sections/Connect';
import Content from '../sections/Content';
import Services from '../sections/Services';

const Home = ({connectOpen, setConnectOpen}) => {
    const [isShow, setShow] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        },0)
    }, []);

    return (
        <div>

            {isShow &&

                <div className="h-screen w-screen z-50 fixed left-0 top-0 flex justify-center items-center backdrop-blur-sm">
                    <video
                    autoPlay
                    playsInline loop
                        className=" object-contain rounded-full  shadow-blue-500/50 "
                        src="/assets/WhatsApp Video 2025-02-25 at 19.03.55.mp4"
                        alt="Loading Animation"
                    />
                </div>
            }
            <HeroSection />
            <Info />
            <AboutSection />
            <HealthCareSection connectOpen={connectOpen} setConnectOpen={setConnectOpen} />
            <Content/>
            <Services/>
            <Features />
            <Connect connectOpen={connectOpen} setConnectOpen={setConnectOpen}/>
        </div>
    );
}

export default Home;
