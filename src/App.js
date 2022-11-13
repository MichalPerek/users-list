import './App.css';
import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UsersList from "./components/UsersList";
import Footer from "./components/Footer";
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
