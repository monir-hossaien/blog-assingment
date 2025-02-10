import {teamStore} from "../../Store/teamStore.js";

const AddMemberBtn = (props) => {
    const {type, className, text} = props;
    const {isSubmit} = teamStore();

    if(isSubmit === false){
        return  <button  type={type} className={className}>{text}</button>
    }else {
        return (
            <button disabled={true} className={className}><div className="spinner-border spinner-border-sm" role="status"></div> Processing...</button>
        );
    }
};
export default AddMemberBtn;