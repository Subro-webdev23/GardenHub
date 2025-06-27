import React, { useContext } from 'react';
import { ImLeaf } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../OthersComponent/AuthContext';
import Swal from 'sweetalert2';
import { IoMoon, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Header = () => {
    const { user, logOut, dark, setDark } = useContext(AuthContext);
    const handleTheme = () => {
        setDark(!dark);
    }
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // alert("Log out Successfully!")
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log Out Successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const navLinks = <>
        <NavLink className="mx-2 pb-1 px-2 " to="/">Home </NavLink>
        <NavLink className="mx-2 pb-1 px-2 " to="/browseTips">Browse All Tips</NavLink>
        <NavLink className="mx-2 pb-1 px-2 " to="/exploreGardens">Explore Gardeners</NavLink>
        {
            user && <>
                <NavLink className="mx-2 pb-1 px-2 " to="/shareGardenTip">Share a Garden Tip</NavLink>
                <NavLink className="mx-2 pb-1 px-2 " to={`/myTips/${user.email}`}>Dashboard</NavLink>
            </>
        }

    </>
    return (
        <>
            <div className={` bg-[#00800020]  backdrop-blur-2xl shadow-sm sticky top-0  z-10 `}>
                <div className="navbar max-w-6xl mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn px-0 mr-4 lg:hidden">
                                <IoMdMenu size={25} />
                            </div>
                            <ul
                                tabIndex={0}
                                className={`menu my-menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`}>
                                {
                                    navLinks
                                }
                            </ul>
                        </div>
                        <Link to={"/"} className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-all duration-300">
                            <ImLeaf className="text-4xl text-green-600" />
                            <span className="text-2xl font-bold tracking-wide">GardenHub</span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu my-menu menu-horizontal px-1">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">

                        <button onClick={() => handleTheme()} className='mr-5 cursor-pointer'>
                            {
                                dark ? <IoSunnyOutline size={25} /> : <IoMoonOutline size={25} />
                            }
                        </button>

                        {user ? (
                            <div className="dropdown dropdown-end">

                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} alt="User" />
                                    </div>
                                </div>

                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36">
                                    <li>
                                        <Link onClick={handleLogOut} className="text-red-500 hover:bg-red-100">
                                            Log out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/signup" className="btn">Sign Up</Link>
                        )}

                    </div>
                </div>
            </div>

        </>

    );
};

export default Header;