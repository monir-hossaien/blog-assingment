import {create} from "zustand";
import axios from "axios";
const baseURL = "https://blog-assingment-1.onrender.com/api/v1"


export const serviceStore = create((set)=>({

    isSubmit: false,
    setSubmit: (boolean)=>{
        set({isSubmit: boolean})
    },

    formData:{title: "", shortDes: "", image: ""},
    inputOnchange: (name, value) => {
        set((state) => ({
            ...state,
            formData: {
                ...state.formData,
                [name]: name === "image" ? value : value,  // Handle image as a file
            }
        }));
    },

    serviceList: null,
    serviceListRequest: async ()=>{
        set({serviceList: null})
        const res = await axios.get(`${baseURL}/service-list`);
        let data = res?.data?.data
        set({serviceList: data})
    },

    createServiceRequest: async (formData)=>{
        const res = await axios.post(`${baseURL}/create-service`, formData,
            {withCredentials: true},
        );
        return res?.data
    }
}))