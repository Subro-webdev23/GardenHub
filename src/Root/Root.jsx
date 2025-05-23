import React, { useContext } from 'react';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import { Outlet, useLoaderData } from 'react-router';
import { AuthContext } from '../Component/OthersComponent/AuthContext';

const Root = () => {
    const data = useLoaderData();
    const { dark } = useContext(AuthContext);
    return (
        <div className={`${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`}>
            <Header data={data}></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;