import React from 'react';
import Button from './Button';

interface FormProps {
    formTitle: string;
    formSubTitle: string;
    children: React.ReactNode;
    onSubmitForm: React.FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<FormProps> = ({
    formTitle,
    formSubTitle,
    children,
    onSubmitForm
}) => {
    return (
        <form
            method='post'
            action='#'
            onSubmit={onSubmitForm}
            className='flex w-full max-w-[400px] flex-col items-center gap-12 rounded-md border bg-slate-100/10 p-9 backdrop-blur-md'
        >
            <div className='flex flex-col items-center gap-1'>
                <h2 className='text-md uppercase text-sky-800'>{formTitle}</h2>
                <p className='text-xs text-sky-600'>{formSubTitle}</p>
            </div>
            <div className='flex w-full flex-col gap-10'>
                <fieldset className='flex w-full flex-col gap-4'>
                    {children}
                </fieldset>
            </div>
            <Button
                option='regular'
                buttonText='Save'
                type='submit'
            />
        </form>
    );
};

export default Form;
