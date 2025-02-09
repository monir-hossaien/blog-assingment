import React, {useEffect} from 'react';
import {blogStore} from "../Store/blogStore.js";
import BlogSkeleton from "../Skeleton/BlogSkeleton.jsx";
import {formatDate, TimestampToDate} from "../Helpers/helper.js";

const Blog = () => {

    const {blogList, blogListRequest} = blogStore();

    useEffect(()=>{
        (async()=>{
            await blogListRequest()
        })()
    },[])

    if(blogList === null){
        return(
            <BlogSkeleton/>
        )
    }
    return (
        <section className="bg-white dark:bg-gray-900 section">
            <div className="container">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the
                        blog</h1>

                    <p className="max-w-lg mx-auto mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium
                        quia tempore delect
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3">
                    {
                        blogList.map((blog, i) =>{
                            const {title , image, content, createdAt} = blog;
                            return (
                                <div key={i}>
                                    <img className="relative z-10 object-cover w-full rounded-md h-96"
                                         src={image}
                                         alt="image"/>

                                    <div
                                        className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                        {title}

                                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                            {content}
                                        </p>

                                        <p className="mt-3 text-sm text-blue-500">{TimestampToDate(createdAt)}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};

export default Blog;