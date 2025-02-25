import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LogoLoader from '../utilities/Loader';

const Layout = ({ wrappedComponent ,connectOpen, setConnectOpen }) => {
    return (
        <>
            {/* <LogoLoader> */}
                <Header connectOpen={connectOpen} setConnectOpen={setConnectOpen} />
                {wrappedComponent}
                <Footer />
            {/* </LogoLoader> */}
        </>
    );
}

export default Layout;
