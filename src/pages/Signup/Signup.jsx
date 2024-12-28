import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { auth } from '../../firebase/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const [userSignUp, setUserSignUp] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserSignUp({ ...userSignUp, [name]: value })
        console.log(userSignUp)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userSignUp.username || !userSignUp.email || !userSignUp.password) {
            return toast.error("All fields are required");
        } else {
            createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
                .then(async (res) => {
                    const user = res.user
                    await updateProfile(user, {
                        displayName: userSignUp.username
                    });

                    navigate('/login')

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }


    return (
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form class="w-full max-w-md">

                        <h1 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Sign Up</h1>

                        <div class="relative flex items-center mt-8">
                            <span class="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>

                            <input onChange={handleChange} value={userSignUp.username} name='username' type="text" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                        </div>

                        <div class="relative flex items-center mt-4">
                            <span class="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input onChange={handleChange} value={userSignUp.email} name='email' type="email" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                        </div>

                        <div class="relative flex items-center mt-4">
                            <span class="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input onChange={handleChange} value={userSignUp.password} name='password' type="password" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                        </div>

                        <div class="mt-6">
                            <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" onClick={handleSubmit}>
                                Sign Up
                            </button>

                            <div class="mt-6 text-center ">
                                <Link to={'/login'} class="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                    Already have an account? Login
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Signup