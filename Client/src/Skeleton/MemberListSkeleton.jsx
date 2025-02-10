import React from 'react';
import Skeleton from "react-loading-skeleton";
import ImagePlaceholder from '../assets/image.json'
import Lottie from "lottie-react";
const MemberListSkeleton = () => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead>
                                <tr>
                                    <th scope="col"
                                        className="py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Image
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Name
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Designation
                                    </th>

                                    <th scope="col"
                                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Join Date
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {Array.from({length: 5}).map((_, index) => (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            <Lottie className="w-10 h-10" animationData={ImagePlaceholder} loop={true}/>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                            <Skeleton width={50}/>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                            <Skeleton width={80}/>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                            <Skeleton width={80}/>
                                        </td>
                                        <div className="flex justify-end items-center gap-3">
                                            <td className="py-4 whitespace-nowrap text-end text-sm font-medium">
                                                <Skeleton width={60} height={20}/>
                                            </td>
                                            <td className="py-4 whitespace-nowrap text-end text-sm font-medium">
                                                <Skeleton width={60} height={20}/>
                                            </td>
                                        </div>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberListSkeleton;