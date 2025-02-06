import {create} from "zustand";
import axios from "axios";
const baseURL = "https://blog-assingment-1.onrender.com/api/v1"


export const teamStore = create((set)=>({

    memberList: null,
    memberListRequest: async ()=>{
        set({memberList: null})
        const res = await axios.get(`${baseURL}/member-list`);
        let data = res?.data?.data
        set({memberList: data})
    }
}))