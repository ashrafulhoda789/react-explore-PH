import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import SideBar from '../sideBar/SideBar';
import './Root.css'

const Root  = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;