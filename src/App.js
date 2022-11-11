import './App.css';
import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UsersList from "./components/UsersList";
import Footer from "./components/Footer";
import { Scrollbars } from 'react-custom-scrollbars-2';
import NavigationFabs from "./components/NavigationFabs";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <NavigationFabs/>
            <Hero/>
            <UsersList/>
            <Footer/>
        </div>
    );
}

export default App;
