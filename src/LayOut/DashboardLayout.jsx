// DashboardLayout.jsx
import React, { useState } from 'react';
import { FiHome, FiPlus, FiList, FiUser, FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { NavLink, Outlet } from 'react-router';
import Header from '../Component/Header/Header';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
        <>

            <Header />
            <div className=' max-w-6xl mx-auto'>

                <div className={`min-h-screen flex`}>

                    {/* Mobile Menu Button */}
                    <button
                        className="absolute top-4 left-4 z-50 lg:hidden text-2xl"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <IoMdClose /> : <FiMenu />}
                    </button>

                    {/* Sidebar */}
                    <aside className={`fixed lg:static  top-0 left-0 h-full w-64 bg-white dark:bg-zinc-800 shadow-lg p-6 transform transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>

                        <nav className="space-y-4">
                            <NavLink to="/dashboard" end className={({ isActive }) => `flex items-center gap-2 p-2 rounded-md transition ${isActive ? 'bg-green-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700'}`}>
                                <FiHome /> Overview
                            </NavLink>
                            <NavLink to="/dashboard/all-items" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-md transition ${isActive ? 'bg-green-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700'}`}>
                                <FiList /> All Tips
                            </NavLink>
                            <NavLink to="/dashboard/my-items" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-md transition ${isActive ? 'bg-green-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700'}`}>
                                <FiUser /> My Items
                            </NavLink>
                            <NavLink to="/dashboard/add-item" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-md transition ${isActive ? 'bg-green-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700'}`}>
                                <FiPlus /> Add Item
                            </NavLink>
                        </nav>

                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 p-6 ">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
