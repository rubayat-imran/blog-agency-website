import React from 'react';
import AppNav from "../component/AppNav.jsx";
import Footer from "../component/Footer.jsx";

function Layout(props) {
    return (
        <>
            <AppNav />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout