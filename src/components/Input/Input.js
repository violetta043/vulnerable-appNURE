import './Input.css';
import { IoEye } from "react-icons/io5";


const Input = ({showIcon}) => {
    return(
        <label > 
            <input type="text" className="Input"/>
            {showIcon ? <IoEye size="34px" color="#44B26F" className='eye'/> : null}
        </label>
    )
}

export default Input;