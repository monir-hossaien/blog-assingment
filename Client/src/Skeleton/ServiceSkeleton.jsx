import React from 'react';
import Lottie from "lottie-react";
import ImagePlaceholder from '../assets/image.json'
import Skeleton from "react-loading-skeleton";

const ServiceSkeleton = () => {
    return (
        <section className="bg-white dark:bg-gray-900 section">
            <div className="container animate-pulse">
                <h2 className="text-2xl font-semibold text-center  capitalize lg:text-3xl dark:text-white">Our Service</h2>
                <div
                    className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {
                        Array.from({length: 8}).map((i)=>{
                            return (
                                <div className="w-full shadow rounded" key={i}>
                                    <div className="object-cover object-center w-full h-48 mx-auto rounded-lg">
                                        <Lottie className="w-full h-48" animationData={ImagePlaceholder} loop={true}/>
                                    </div>
                                    <div className="p-6">
                                        <Skeleton width={180} height={18} />
                                        <div className="mt-4">
                                            <Skeleton count={3} height={10} />
                                        </div>
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

export default ServiceSkeleton;