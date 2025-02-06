import React, {useEffect} from 'react';
import {teamStore} from "../Store/teamStore.js";
import TeamSkeleton from "../Skeleton/TeamSkeleton.jsx";
import {TimestampToDate} from "../Helpers/helper.js";

const Team = () => {
    const {memberList, memberListRequest} = teamStore()

    useEffect(()=>{
        (async()=>{
            await memberListRequest()
        })()
    },[])

    if(memberList === null){
        return (
            <TeamSkeleton/>
        )
    }

    return (
        <section className="bg-white dark:bg-gray-900 lg:px-20 lg:py-14">
            <div className="container px-6 py-8 mx-auto">
                <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our
                    Team</h2>

                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        memberList.map((member, i) => {
                            const {name, designation, image, createdAt} = member
                            return (
                                <div key={i} className="w-full max-w-xs text-center shadow rounded">
                                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                         src={image}
                                         alt="avatar"/>
                                    <div className="py-4">
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{name}</h3>
                                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">{designation}</span>
                                        <p className="mt-3 text-sm text-blue-500">Joined: {TimestampToDate(createdAt)}</p>
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

export default Team;