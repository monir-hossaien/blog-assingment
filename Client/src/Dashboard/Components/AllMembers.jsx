import React, {useEffect} from 'react';
import {userStore} from "../../Store/userStore.js";
import {teamStore} from "../../Store/teamStore.js";
import {TimestampToDate} from "../../Helpers/helper.js";
import MemberListSkeleton from "../../Skeleton/MemberListSkeleton.jsx";

const AllMembers = () => {
    const {memberList, memberListRequest} = teamStore();
    const {isLogin} = userStore()

    useEffect(()=>{
        (async ()=>{
            isLogin() && await memberListRequest()
        })()
    },[])

    if(memberList === null){
        return (<MemberListSkeleton/>)
    }

    return (
        <div className="">
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
                                {
                                    memberList.map((member, i) => {
                                        const {name, designation, image, createdAt} = member
                                        return (
                                            <tr key={i} className="">
                                                <td className="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                    <img className="w-14 h-10" src={image} alt="image"/>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 200">
                                                    {designation}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 200">
                                                    {TimestampToDate(createdAt)}
                                                </td>
                                                <td className="py-4 whitespace-nowrap text-end text-sm font-medium flex justify-end items-center gap-3">
                                                    <button type="button"
                                                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                        Delete
                                                    </button>
                                                    <button type="button"
                                                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllMembers;