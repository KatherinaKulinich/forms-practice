import { useEffect, useState } from 'react';
import { validateValues } from '../../helpers/validation';
import { FormData, FormErrors } from '../../types/FormData';
import { initialValues, inputsData } from '../../utils/inputsData';
import ConfettiEffect from '../ConfettiEffect';
import Field from '../Field';
import Form from '../Form';
import ModalFormIsFinished from '../modals/ModalFormIsFinished';

const BasicForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>(initialValues);
    const [isConfetti, setIsConfetti] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({
        userName: null,
        userSurname: null,
        userCity: null,
        userCountry: null,
        userEmail: null,
        userAge: null
    } as FormErrors);

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

        setErrors(validateValues(formData));

        // setIsConfetti(true);
    };

    const onFormFinished = () => {
        setIsConfetti(false);
        setIsModalVisible(true);
    };

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    return (
        <>
            <Form
                formTitle='Controlled Form'
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
                        isErrorMessage={
                            errors[data.name as keyof FormData] !== null
                        }
                        message={
                            errors[data.name as keyof FormData] === null
                                ? ''
                                : errors[data.name as keyof FormData] || ''
                        }
                    />
                ))}
            </Form>

            {isConfetti && <ConfettiEffect offTheEffect={onFormFinished} />}
            <ModalFormIsFinished
                isVisible={isModalVisible}
                formData={formData}
                onClose={() => setIsModalVisible(false)}
            />
        </>
    );
};

export default BasicForm;
