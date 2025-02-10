import toast from "react-hot-toast";

export const successToast = (msg)=>{
    toast.success(msg)
}

export const errorToast = (msg)=>{
    toast.error(msg)
}

export const formatDate = (dateString) => {
    const options = { timeZone: 'Asia/Dhaka', day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString));
};


export  const  TimestampToDate =(timestamp)=> {
    let date = new Date(timestamp);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
}

export const isEmpty =(value)=>{
    return value.length === 0;
}