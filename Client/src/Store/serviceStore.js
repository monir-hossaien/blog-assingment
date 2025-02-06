import {create} from "zustand";
import axios from "axios";
const baseURL = "https://blog-assingment-1.onrender.com/api/v1"


export const serviceStore = create((set)=>({

    serviceList: null,
    serviceListRequest: async ()=>{
        set({serviceList: null})
        const res = await axios.get(`${baseURL}/service-list`);
        let data = res?.data?.data
        set({serviceList: data})
    }
}))