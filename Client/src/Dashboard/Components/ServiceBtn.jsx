import {serviceStore} from "../../Store/serviceStore.js";

const ServiceBtn = (props) => {
    const {type, className, text} = props;
    const {isSubmit} = serviceStore();

    if(isSubmit === false){
        return  <button  type={type} className={className}>{text}</button>
    }else {
        return (
            <button disabled={true} className={className}><div className="spinner-border spinner-border-sm" role="status"></div> Processing...</button>
        );
    }
};
export default ServiceBtn;