
import {create} from "zustand";
import cookies from "js-cookie";
import axios from "axios";
const baseURL = "https://blog-assingment-1.onrender.com/api/v1"
export const userStore = create((set)=>({

    isLogin:()=>{
        return !!cookies.get('token');
    },

    isSubmit: false,
    setSubmit: (boolean)=>{
        set({isSubmit: boolean})
    },
    //form onchange
    formData: {email: "", password: ""},
    inputOnchange: (name, value)=>{
        set((state)=>({
            formData:{
                ...state.formData,
                [name]: value
            }
        }))
    },

    loginRequest: async (postBody)=>{
        const res = await axios.post(`${baseURL}/login`, postBody);
        let data = res?.data
        return data
    },

    logoutRequest: async ()=>{
        let res = await cookies.remove('token');
        return res
    }
}))