import React from 'react';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import { Outlet, useLoaderData } from 'react-router';

const Root = () => {
    const data = useLoaderData();
    return (
        <div>
            <Header data={data}></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;