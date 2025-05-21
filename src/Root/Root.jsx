import React from 'react';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-6xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;