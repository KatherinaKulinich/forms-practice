import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { inputsData } from './utils/inputsData';

interface FormData {
    userName: string;
    userSurname: string;
    userBirthday: string;
    userEmail: string;
    userPassword: string;
}

interface FormProps {
    formTitle: string;
    formSubTitle: string;
}

const Form: React.FC<FormProps> = ({ formTitle, formSubTitle }) => {
    const initialValues = {
        userName: '',
        userSurname: '',
        userBirthday: '',
        userEmail: '',
        userPassword: ''
    };

    const [formData, setFormData] = useState<FormData>(initialValues);

    // const onChangeFormData: React.ChangeEventHandler<HTMLInputElement> = (
    //     event
    // ) => {
    //     const value = event.target.value;
    //     const name = event.target.name;

    //     setFormData((current) => {
    //         return {
    //             ...current,
    //             [name]: value
    //         };
    //     });
    // };

    // const onSubmitData: React.MouseEventHandler<HTMLButtonElement> = (
    //     event
    // ) => {
    //     event.preventDefault();
    //     console.log(formData);
    // };

    const onResetFormData: React.MouseEventHandler<HTMLButtonElement> = () => {
        setFormData(initialValues);
    };

    return (
        <div className='flex w-full max-w-[400px] flex-col gap-12 rounded-md border bg-slate-100/10 p-9 backdrop-blur-md'>
            <div className='flex w-full flex-col gap-1'>
                <h2 className='text-md uppercase text-sky-800'>{formTitle}</h2>
                <p className='text-xs text-sky-600'>{formSubTitle}</p>
            </div>
            <form
                className='flex flex-col gap-10'
                method='post'
            >
                <fieldset className='flex w-full flex-col gap-4'>
                    {inputsData?.map((data) => (
                        <Input
                            key={data.name}
                            type={data.type}
                            name={data.name}
                            labelText={data.label}
                            placeholder={data.placeholder}
                        />
                    ))}
                </fieldset>
                <div className='flex gap-3 self-end'>
                    <Button
                        option='reset'
                        buttonText='Reset'
                        type='reset'
                        onClick={onResetFormData}
                    />
                    <Button
                        option='regular'
                        // onClick={onSubmitData}
                        buttonText='Save'
                        type='submit'
                    />
                </div>
            </form>
        </div>
    );
};

export default Form;
