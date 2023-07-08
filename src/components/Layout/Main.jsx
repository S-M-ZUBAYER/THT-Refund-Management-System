import React from 'react';
import Navbar from '../SharePage/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharePage/Footer';
import Hero from '../SharePage/Hero';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;