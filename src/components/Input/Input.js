import './Input.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from 'react';


const Input = ({showIcon, label, }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); 
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        setIsPasswordVisible(prevState => !prevState); 
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return(
        
       
        <div className="InputWrapper">     
                <input 
                    type={showIcon ? (isPasswordVisible ? "text" : "password") : "text"} 
                    className="Input"
                    value={inputValue}
                    onChange={handleChange}
                />
                <label className={`Text-label ${inputValue !== '' ? 'Text-label--hidden' : ''}`}>
                    {label}
                </label>
                {showIcon && (
                    <button onClick={handleClick} className='IconButton'>
                        {isPasswordVisible ? <IoEyeOff size="34px" color="#44B26F" /> : <IoEye size="34px" color="#44B26F" />}
                    </button>
                )}
        </div>
           
         
    )
}

export default Input;
