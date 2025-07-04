import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Component/OthersComponent/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const SignIn = () => {
    const { signInUser, setUser, signInGoogle, dark } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(res => {
                const user = res.user;
                // console.log(user);
                setUser(user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Loged in Success!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/");

            })
            .catch(error => {
                const errorCode = error.code;
                console.log(errorCode);
                console.log(error);
                // const errorMassage = error.massage;
                // console.log(errorMassage, "m");
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: errorCode,
                    showConfirmButton: false,
                    timer: 1500
                });

            })
    }
    const handleGoogleLogIn = () => {
        signInGoogle()
            .then((result) => {
                console.log("result", result);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Loged in Successeful!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/");


            })
            .catch(error => {
                const errorCode = error.code;
                alert(errorCode);
            })
    }

    return (
        <div className={`card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`}>
            <Helmet>
                <title>
                    Sign In
                </title>
            </Helmet>
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign In now!</h1>
                <form onSubmit={handleSignIn} className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" name="email" className={`input border dark:border-gray-700 ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`} placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className={`input border dark:border-gray-700 ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`} placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Sign in</button>
                </form>
                <p>Don't Have an Account ? Please <Link className='text-blue-500' to="/signup">Sign Up</Link></p>
                <button onClick={handleGoogleLogIn} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default SignIn;