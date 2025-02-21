import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ wrappedComponent }) => {
    return (
        <>
            <Header />
            {wrappedComponent}
            <Footer />
        </>
    );
}

export default Layout;
