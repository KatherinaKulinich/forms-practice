import { useState } from 'react';
import { initialValues, inputsData } from '../../utils/inputsData';
import Field from '../Field';
import Form from '../Form';

interface FormData {
    userName: string;
    userSurname: string;
    userBirthday: string;
    userEmail: string;
    userPassword: string;
}

const BasicForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>(initialValues);
    // const [errors, setErrors] = useState()

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

    const onSubmitFormData: React.FormEventHandler<HTMLFormElement> = (
        event
    ) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <Form
            formTitle='Basic Form'
            formSubTitle='with useState and custom validation'
            onSubmitForm={onSubmitFormData}
        >
            {inputsData?.map((data) => (
                <Field
                    key={data.name}
                    type={data.type}
                    name={data.name}
                    labelText={data.label}
                    placeholder={data.placeholder}
                    onChange={(event) => onChangeFormData(event)}
                />
            ))}
        </Form>
    );
};

export default BasicForm;
