import {create} from "zustand";
import axios from "axios";
const baseURL = "https://blog-assingment-1.onrender.com/api/v1"


export const teamStore = create((set)=>({

    isSubmit: false,
    setSubmit: (boolean)=>{
        set({isSubmit: boolean})
    },

    formData:{name: "", designation: "", image: ""},
    inputOnchange: (name, value) => {
        set((state) => ({
            ...state,
            formData: {
                ...state.formData,
                [name]: name === "image" ? value : value,  // Handle image as a file
            }
        }));
    },

    memberList: null,
    memberListRequest: async ()=>{
        set({memberList: null})
        const res = await axios.get(`${baseURL}/member-list`);
        let data = res?.data?.data
        set({memberList: data})
    },
    createMemberRequest: async (formData)=>{
        const res = await axios.post(`${baseURL}/create-member`, formData,
            {withCredentials: true},
        );
        return res?.data
    }
}))