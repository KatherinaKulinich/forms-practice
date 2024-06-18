import React, { HTMLInputTypeAttribute } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: HTMLInputTypeAttribute;
    name: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, name, placeholder, ...rest }) => {
    return (
        <input
            type={type}
            name={name}
            id={name}
            autoComplete='off'
            className='w-full rounded-md border-2 border-blue-400 bg-slate-100/60 px-2 py-1 text-sm text-sky-700 focus:outline-indigo-600'
            placeholder={placeholder}
            {...rest}
        />
    );
};

export default Input;
