import './Input.css';
import { IoEye } from "react-icons/io5";


const Input = ({showIcon, label}) => {
    return(
        <>
        <label className="Text-leble"> 
            {label}
        </label>
            <input type="text" className="Input"/>
            {showIcon ? <IoEye size="34px" color="#44B26F" className='eye'/> : null}
        </>
        
    )
}

export default Input;