import {create} from "zustand";
import axios from "axios";
const baseURL = "https://blog-assingment-1.onrender.com/api/v1"
export const blogStore = create((set)=>({

    isSubmit: false,
    setSubmit: (boolean)=>{
        set({isSubmit: boolean})
    },

    formData:{title: "", content: "", image: ""},
    inputOnchange: (name, value)=>{
        set((state)=>({
            ...state,
            formData: {
                ...state.formData,
                [name]: value
            }
        }))
    },

    blogList: null,
    blogListRequest: async ()=>{
        set({blogList: null})
        const res = await axios.get(`${baseURL}/blog-list`);
        let data = res?.data?.data
        set({blogList: data})
    },

    createBlogListRequest: async (formData)=>{
        const res = await axios.post(`${baseURL}/create-blog`, formData, {withCredentials: true});
        return res?.data
    }
}))