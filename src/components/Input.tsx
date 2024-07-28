import React, { HTMLInputTypeAttribute, LegacyRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: HTMLInputTypeAttribute;
    name: string;
    placeholder: string;
}

const Input = React.forwardRef(
    (props: InputProps, ref?: LegacyRef<HTMLInputElement>) => {
        const { type, name, placeholder, ...rest } = props;

        return (
            <input
                type={type}
                name={name}
                id={name}
                autoComplete='off'
                className='w-full rounded-md border-2 border-indigo-500 bg-slate-100/60 px-2 py-1 text-sm placeholder:text-violet-300 focus:outline-violet-300'
                placeholder={placeholder}
                ref={ref}
                {...rest}
            />
        );
    }
);

export default Input;
