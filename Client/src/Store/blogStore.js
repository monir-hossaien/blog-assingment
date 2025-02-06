import {create} from "zustand";
import cookies from "js-cookie";
import axios from "axios";
const baseURL = "https://blog-assingment-1.onrender.com/api/v1"
export const blogStore = create((set)=>({

    blogList: null,
    blogListRequest: async ()=>{
        set({blogList: null})
        const res = await axios.get(`${baseURL}/blog-list`);
        let data = res?.data
        set({blogList: data})
    }
}))