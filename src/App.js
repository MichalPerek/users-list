import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/MainPanel/Hero";
import UsersList from "./components/MainPanel/UsersList";
import Footer from "./components/MainPanel/Footer";
import NavigationFabs from "./components/NavigationFabs";
import {Route, Routes} from 'react-router-dom'
import MainPanel from "./pages/MainPanel";
import Login from "./pages/Login"
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path ='/main' element ={<MainPanel/>}/>
            <Route path ='/login' element = {<Login/>} />
            <Route path ='/*' element = {<NotFound/>} />


        </Routes>
    );
}

export default App;
