import { HTMLInputTypeAttribute } from 'react';
import Input from './Input';

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: HTMLInputTypeAttribute;
    name: string;
    labelText: string;
    placeholder: string;
}

const Field: React.FC<FieldProps> = ({
    type,
    name,
    labelText,
    placeholder,
    ...rest
}) => {
    return (
        <div className='flex w-full max-w-[400px] flex-col content-center gap-1'>
            <label
                htmlFor={name}
                className='bold w-full text-xs uppercase text-blue-900'
            >
                {labelText}
            </label>
            <Input
                type={type}
                name={name}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    );
};

export default Field;
