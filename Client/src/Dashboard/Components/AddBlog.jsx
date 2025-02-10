import React from 'react';
import {blogStore} from "../../Store/blogStore.js";
import {errorToast, isEmpty, successToast} from "../../Helpers/helper.js";
import BlogBtn from "./BlogBtn.jsx";
import {userStore} from "../../Store/userStore.js";
const AddBlog = () => {
    const {createBlogRequest, setSubmit, formData, inputOnchange} = blogStore();
    const isLogin = userStore(state => state.isLogin);
    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        try {
            if(isEmpty(formData.title)){
                errorToast("Title field is required");
            }
            else if(isEmpty(formData.content)){
                errorToast("Content field is required");
            }else if(isEmpty(formData.image)){
                errorToast("Image field is required");
            }else{
                const formDataToSend = new FormData();
                formDataToSend.append("title", formData.title);
                formDataToSend.append("content", formData.content);
                formDataToSend.append("image", formData.image);
                setSubmit(true);
                let res= isLogin() && await createBlogRequest(formDataToSend);
                if(res?.status === true){
                    setSubmit(false);
                    successToast(res?.message)
                }else{
                    setSubmit(false)
                    errorToast(res?.message)
                }
            }

        }catch (e) {
            setSubmit(false)
            errorToast(e.response?.data?.message)
        }
    }

    return (
        <section className="rounded-md shadow lg:w-[50%]  p-6 lg:mx-auto">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Create Blog</h2>

            <form encType="multipart/form-data" onSubmit={handleFormSubmit}>
                <div className="grid grid-rows-1 gap-2 mt-4 sm:grid-rows-1">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Title</label>
                        <input id="title" type="text"
                               value={formData.title}
                               onChange={(e) => {
                                   inputOnchange("title", e.target.value)
                               }}
                               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Content</label>
                        <input id="content" type="text"
                               value={formData.content}
                               onChange={(e) => {
                                   inputOnchange("content", e.target.value)
                               }}
                               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Image</label>
                        <input id="image" type="file" name="image"

                               onChange={(e) => {
                                   inputOnchange("image", e.target.files[0])
                               }}
                               className=" cursor-pointer w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"

                        />
                    </div>
                    <div className="flex justify-end mt-6">
                        <BlogBtn type="submit"
                                className="lg:w-40 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                text="Save"
                        />

                    </div>

                </div>
            </form>
        </section>
    );
};

export default AddBlog;