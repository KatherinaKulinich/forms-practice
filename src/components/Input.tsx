import React, { HTMLInputTypeAttribute } from 'react';

interface InputProps {
    type: HTMLInputTypeAttribute;
    name: string;
    inputValue: string;
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    labelText: string;
}

const Input: React.FC<InputProps> = ({
    type,
    name,
    inputValue,
    onChangeHandler,
    labelText
}) => {
    return (
        <div className='flex w-full content-center after:gap-4'>
            <label
                htmlFor={name}
                className='bold w-full uppercase text-blue-900'
            >
                {labelText}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                autoComplete='off'
                value={inputValue}
                className='w-full rounded-md border-2 border-blue-400 bg-slate-100/60 px-2 py-1 active:border-blue-700'
                onChange={onChangeHandler}
            />
        </div>
    );
};

export default Input;
