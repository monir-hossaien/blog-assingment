import React, {useEffect} from 'react';
import {serviceStore} from "../Store/serviceStore.js";
import ServiceSkeleton from "../Skeleton/ServiceSkeleton.jsx";

const Service = () => {
    const {serviceList, serviceListRequest} = serviceStore()

    useEffect(()=>{
        (async()=>{
            await serviceListRequest()
        })()
    },[])

    if(serviceList === null){
        return (
            <ServiceSkeleton/>
        )
    }

    return (
        <section className="bg-white dark:bg-gray-900 lg:px-20 lg:py-14">
            <div className="container px-6 py-8 mx-auto">
                <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our
                    Service</h2>

                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {
                        serviceList.map((service, i) => {
                            const {title, shortDes, image} = service
                            return (
                                <div key={i} className="w-full max-w-xs shadow rounded">
                                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                         src={image}
                                         alt="avatar"/>
                                    <div className="p-6">
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{title}</h3>
                                        <p className="mt-3 text-gray-600 dark:text-gray-300">{shortDes}</p>
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

export default Service;