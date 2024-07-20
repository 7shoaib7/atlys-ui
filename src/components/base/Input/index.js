import "./input.css";

const Input = ({ label, name, type, placeholder, value, onChange }) => {
    return (
        <div className='input'>
            <label className='input__label'>
                {label}
            </label>
            <input
                className='input__box'
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;