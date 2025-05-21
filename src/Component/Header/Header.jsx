import React, { useContext } from 'react';
import { ImLeaf } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../OthersComponent/AuthContext';
import Swal from 'sweetalert2';
import EventSlider from '../OthersComponent/EventSlider';

const Header = ({ data }) => {
    const { user, logOut } = useContext(AuthContext)
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
        <NavLink className="mx-2 pb-1 px-2 " to="/shareGardenTip">Share a Garden Tip</NavLink>
        <NavLink className="mx-2 pb-1 px-2 " to="/exploreGardens">Explore Gardeners</NavLink>
        <NavLink className="mx-2 pb-1 px-2 " to="/myTips">My Tips</NavLink>
    </>
    return (
        <>
            <div className=' bg-[#00800020] backdrop-blur-2xl shadow-sm sticky top-0  z-10'>
                <div className="navbar max-w-6xl mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn px-0 mr-4 lg:hidden">
                                <IoMdMenu size={25} />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {
                                    navLinks
                                }
                            </ul>
                        </div>
                        <a ><ImLeaf style={{ color: "green", fontSize: "36px" }} /></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {/* {user?.photoURL && (
                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="w-8 h-8 rounded-full mr-5 "
                            />
                        </div>
                    )} */}

                        {/* <img className='w-8 h-8 mr-5 hover:' src={user?.photoURL} alt={user?.displayName} /> */}
                        <p>{user?.email}</p>

                        {user ? <Link onClick={handleLogOut} className="btn">Log out</Link> : <Link to={"/signup"} className="btn">Sign Up</Link>}

                    </div>
                </div>
            </div>
            <div className='-mb-2'>
                <EventSlider data={data}></EventSlider>
            </div>
        </>

    );
};

export default Header;