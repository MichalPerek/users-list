import './App.css';
import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UsersList from "./components/UsersList";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <UsersList/>
        </div>
    );
}

export default App;
