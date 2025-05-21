import React, { useContext } from 'react';
import { AuthContext } from '../Component/OthersComponent/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const SignUp = () => {
    const { createUser, setUser } = useContext(AuthContext);
    console.log(createUser)
    const navigate = useNavigate()


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // create user in the firebase 
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log("setUser", user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign up Successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/");

            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-10">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />
                    <label className="label">photo</label>
                    <input type="url" name="photo" className="input" placeholder="Photo URL" />
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Sign up</button>
                </form>
                <p>Already Have an Account ? Please <Link className='text-blue-500' to="/signin">Sign In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;