import './App.css';
import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UsersList from "./components/UsersList";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <UsersList/>
            <Footer/>
        </div>
    );
}

export default App;
