import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Component/OthersComponent/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { signInUser, setUser } = useContext(AuthContext);
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
    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign In now!</h1>
                <form onSubmit={handleSignIn} className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Sign in</button>
                </form>
                <p>Don't Have an Account ? Please <Link className='text-blue-500' to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default SignIn;