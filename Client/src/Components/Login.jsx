import React from 'react';
import {userStore} from "../Store/userStore.js";
import UserButton from "./UserButton.jsx";
import {errorToast, successToast} from "../Helpers/helper.js";
import {useNavigate} from "react-router";

const Login = () => {
    const navigate = useNavigate();

    const {formData, loginRequest, inputOnchange, setSubmit} = userStore();
    console.log(formData);

    const handleFormSubmit = async () => {
        try {
            setSubmit(true);
            let res = await loginRequest(formData);
            if(res){
                setSubmit(false);
                successToast(res?.message);
                navigate("/")
            }else{
                setSubmit(false);
                errorToast(res?.message);
            }
        }catch(e){
            setSubmit(false);
            errorToast(e?.response?.data?.message);
        }
    }

    return (
        <div className="section">
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow dark:bg-gray-800 py-5">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="images/plainb-logo.svg" alt=""/>
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome
                        Back</h3>

                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                    <div>
                        <div className="w-full my-5">
                            <input value={formData.email} onChange={(e)=>{inputOnchange("email", e.target.value)}}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="email" placeholder="Email Address" aria-label="Email Address"/>
                        </div>

                        <div className="w-full my-5">
                            <input value={formData.password} onChange={(e)=>{inputOnchange("password", e.target.value)}}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="password" placeholder="Password" aria-label="Password"/>
                        </div>

                        <div className="mt-6">
                            <UserButton  onClick={()=>handleFormSubmit()} text="Login" className="w-40 px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"/>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                    <a href="#"
                       className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Login;