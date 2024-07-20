import "./input.css";
import passwordView from "../../../assets/images/passwordViewIcon.svg"
import { useState } from "react";

const Input = ({ label, name, type, placeholder, value, onChange, password,passwordForgot }) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='input'>
            <div className="input__label__container">
                <label className='input__label'>
                    {label}
                </label>
                {passwordForgot &&<span className='input__label__forgot'>Forgot password?</span>}
            </div>

            <div className="input__container">
                <input
                    className='input__box'
                    name={name}
                    type={password && !showPassword ? "password" : "text"}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {password && <img src={passwordView} alt="passwordView" className="input__password__icon" onClick={() => setShowPassword(!showPassword)} />}
            </div>
        </div>
    );
};

export default Input;