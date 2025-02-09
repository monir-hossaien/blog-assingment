import React from 'react';
import Lottie from "lottie-react";
import ImagePlaceholder from '../assets/image.json'
import Skeleton from "react-loading-skeleton";

const BlogSkeleton = () => {
    return (
        <section className="bg-white dark:bg-gray-900 section">
            <div className="container animate-pulse">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the
                        blog</h1>

                    <p className="max-w-lg mx-auto mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium
                        quia tempore delect
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3">
                    {
                        Array.from({length: 6}).map((i)=>{
                            return (
                                <div className="w-full shadow" key={i}>
                                    <div className="w-full h-64 bg-gray-100 rounded-lg dark:bg-gray-600">
                                        <Lottie className="w-full h-64" animationData={ImagePlaceholder} loop={true}/>
                                    </div>
                                    <div className="p-8">
                                        <Skeleton width={200} height={20} className="mt-4" />
                                        <Skeleton count={2} className="mt-3" height={10} />
                                        <Skeleton width={100} height={10} className="mt-3" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogSkeleton;