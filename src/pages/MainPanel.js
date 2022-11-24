import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import NavigationFabs from "../components/NavigationFabs";
import Hero from "../components/MainPanel/Hero";
import UsersList from "../components/MainPanel/UsersList";
import Footer from "../components/MainPanel/Footer";

const MainPanel = () => {
    return (
        <>
            <Navbar/>
            <NavigationFabs/>
            <Hero/>
            <UsersList/>
            <Footer/>
        </>
    );
};

export default MainPanel;