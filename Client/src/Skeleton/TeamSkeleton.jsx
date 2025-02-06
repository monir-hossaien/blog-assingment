import React from 'react';
import Lottie from "lottie-react";
import ImagePlaceholder from '../assets/image.json'
import Skeleton from "react-loading-skeleton";

const TeamSkeleton = () => {
    return (
        <section className="bg-white dark:bg-gray-900 lg:px-20 lg:py-14">
            <div className="container px-6 py-8 mx-auto animate-pulse">
                <h2 className="text-2xl font-semibold text-center capitalize lg:text-3xl dark:text-white">Our Team</h2>
                <div
                    className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        Array.from({length: 8}).map((i)=>{
                            return (
                                <div className="w-full max-w-xs text-center shadow rounded" key={i}>
                                    <div className="object-cover object-center w-full h-48 mx-auto rounded-lg">
                                        <Lottie className="w-full h-48" animationData={ImagePlaceholder} loop={true}/>
                                    </div>
                                    <div className="p-4">
                                        <Skeleton width={80} count={1} height={15}/>
                                        <Skeleton width={140} count={1} className="mt-1" height={10} />
                                        <Skeleton width={100} count={1} className="mt-3" height={10} />
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

export default TeamSkeleton;