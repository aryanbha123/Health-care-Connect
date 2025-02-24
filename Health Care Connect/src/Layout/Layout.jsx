import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LogoLoader from '../utilities/Loader';

const Layout = ({ wrappedComponent }) => {
    return (
        <>
            {/* <LogoLoader> */}
                <Header />
                {wrappedComponent}
                <Footer />
            {/* </LogoLoader> */}
        </>
    );
}

export default Layout;
