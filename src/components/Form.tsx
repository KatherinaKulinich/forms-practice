import { useState } from 'react';
import Button from './Button';
import Input from './Input';

interface FormData {
    userName: string;
    userSurname: string;
    userBirthday: string;
    userEmail: string;
    userPassword: string;
    userPasswordChecking: string;
}

const Form: React.FC = () => {
    const initialValues = {
        userName: '',
        userSurname: '',
        userBirthday: '',
        userEmail: '',
        userPassword: '',
        userPasswordChecking: ''
    };
    const [formData, setFormData] = useState<FormData>(initialValues);

    const onChangeFormData: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.target.value;
        const name = event.target.name;

        setFormData((current) => {
            return {
                ...current,
                [name]: value
            };
        });
    };

    const onSubmitData: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        event.preventDefault();
        console.log(formData);
    };

    const onResetFormData: React.MouseEventHandler<HTMLButtonElement> = () => {
        setFormData(initialValues);
    };

    return (
        <form
            className='absolute left-1/2 top-1/2 flex w-6/12 -translate-x-2/4 -translate-y-2/4 flex-col gap-10 rounded-md border bg-stone-100/10 p-9 backdrop-blur-md'
            method='post'
        >
            <fieldset className='flex w-full flex-col gap-4'>
                <Input
                    type='text'
                    name='userName'
                    inputValue={formData.userName}
                    onChangeHandler={onChangeFormData}
                    labelText='Your name:'
                />
                <Input
                    type='text'
                    name='userSurname'
                    inputValue={formData.userSurname}
                    onChangeHandler={onChangeFormData}
                    labelText='Your surname:'
                />
                <Input
                    type='date'
                    name='userBirthday'
                    inputValue={formData.userBirthday}
                    onChangeHandler={onChangeFormData}
                    labelText='Your birthday:'
                />
                <Input
                    type='mail'
                    name='userEmail'
                    inputValue={formData.userEmail}
                    onChangeHandler={onChangeFormData}
                    labelText='Your email:'
                />
                <Input
                    type='password'
                    name='userPassword'
                    inputValue={formData.userPassword}
                    onChangeHandler={onChangeFormData}
                    labelText='Create password:'
                />
                <Input
                    type='password'
                    name='userPassword'
                    inputValue={formData.userPassword}
                    onChangeHandler={onChangeFormData}
                    labelText='Repeat password:'
                />
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
                    onClick={onSubmitData}
                    buttonText='Save'
                    type='submit'
                />
            </div>
        </form>
    );
};

export default Form;
