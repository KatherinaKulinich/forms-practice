import React from 'react';
import Button from './Button';

interface FormProps {
    formTitle: string;
    formSubTitle: string;
    children: React.ReactNode;
    onSubmitForm: React.FormEventHandler<HTMLFormElement>;
    isDisabled?: boolean;
}

const Form: React.FC<FormProps> = ({
    formTitle,
    formSubTitle,
    children,
    onSubmitForm,
    isDisabled
}) => {
    return (
        <form
            method='post'
            action='#'
            onSubmit={onSubmitForm}
            className='flex w-[450px] flex-col items-center gap-8 rounded-lg border bg-slate-100/20 p-10 backdrop-blur-lg'
        >
            <div className='flex flex-col items-center gap-1'>
                <h2 className='text-lg font-bold uppercase tracking-widest text-violet-900'>
                    {formTitle}
                </h2>
                <p className='text-xs text-violet-500'>{formSubTitle}</p>
            </div>
            <div className='flex w-full flex-col'>
                <fieldset className='flex w-full flex-col gap-10'>
                    {children}
                </fieldset>
            </div>
            <Button
                option='regular'
                buttonText='Save'
                type='submit'
                disabled={isDisabled}
            />
        </form>
    );
};

export default Form;
