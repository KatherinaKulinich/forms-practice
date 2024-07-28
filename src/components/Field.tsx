import React, { HTMLInputTypeAttribute, LegacyRef } from 'react';
import Input from './Input';

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: HTMLInputTypeAttribute;
    name: string;
    labelText: string;
    placeholder: string;
    isErrorMessage: boolean;
    message: string;
}

const Field = React.forwardRef(
    (props: FieldProps, ref?: LegacyRef<HTMLInputElement>) => {
        const {
            type,
            name,
            labelText,
            placeholder,
            isErrorMessage,
            message,
            ...rest
        } = props;

        return (
            <div className='flex w-full max-w-[400px] flex-col content-center gap-1'>
                <div className='flex flex-col gap-2'>
                    <label
                        htmlFor={name}
                        className='bold w-full text-xs uppercase text-violet-500'
                    >
                        {labelText}
                    </label>
                    <Input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        ref={ref}
                        {...rest}
                    />
                </div>
                {isErrorMessage && (
                    <p className='text-xs font-semibold text-red-700'>
                        {message}
                    </p>
                )}
            </div>
        );
    }
);

export default Field;
