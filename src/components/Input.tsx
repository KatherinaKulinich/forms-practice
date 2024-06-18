import React, { HTMLInputTypeAttribute } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: HTMLInputTypeAttribute;
    name: string;
    labelText: string;
    placeholder: string;
}
// interface InputProps {
//     type: HTMLInputTypeAttribute;
//     name: string;
//     inputValue: string;
//     onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
//     labelText: string;
//     placeholder: string;
// }

const Input: React.FC<InputProps> = ({
    type,
    name,
    labelText,
    placeholder
}) => {
    return (
        <div className='flex w-full max-w-[400px] flex-col content-center gap-1'>
            <label
                htmlFor={name}
                className='bold w-full text-xs uppercase text-blue-900'
            >
                {labelText}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                autoComplete='off'
                className='w-full rounded-md border-2 border-blue-400 bg-slate-100/60 px-2 py-1 text-sm text-sky-700 focus:outline-indigo-600'
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
