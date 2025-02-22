import React from 'react';
import HealthCareSection from '../sections/HealthCareSection';
import HeroSection from '../sections/Hero';
import Features from '../sections/Features';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <HealthCareSection/>
            <Features/>
        </div>
    );
}

export default Home;
