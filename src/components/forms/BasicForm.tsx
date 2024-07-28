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
    const [isModalData, setIsModalData] = useState<FormData>({} as FormData);

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

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

    const onSubmitFormData: React.FormEventHandler<HTMLFormElement> = async (
        event
    ) => {
        event.preventDefault();
        setErrors(validateValues(formData));
        setIsFormSubmitting(true);
    };

    useEffect(() => {
        const errorsChecking = Object.values(errors).every(
            (key) => key === null
        );

        if (errorsChecking) {
            setIsSuccess(true);
            return;
        }
        setIsSuccess(false);
    }, [errors, isFormSubmitting]);

    useEffect(() => {
        if (isSuccess && isFormSubmitting) {
            getConfettiEffect();
            setIsModalData(formData);
        }
    }, [isSuccess, isFormSubmitting]);

    const onFormFinished = () => {
        setIsConfetti(false);

        const errorsChecking = Object.values(errors).every(
            (key) => key === null
        );

        if (errorsChecking) {
            setIsModalVisible(true);
            setTimeout(() => {
                setFormData(initialValues);
            }, 2000);
        }
    };

    const getConfettiEffect = () => {
        const errorsChecking = Object.values(errors).every(
            (key) => key === null
        );

        if (errorsChecking) {
            setIsConfetti(true);
        }
    };

    const isButtonDisabled = Object.values(formData).every((key) => key === '');

    return (
        <>
            <Form
                formTitle='Controlled Form'
                formSubTitle='with useState and custom validation'
                onSubmitForm={onSubmitFormData}
                isDisabled={isButtonDisabled}
            >
                {inputsData?.map((data) => (
                    <Field
                        value={formData[data.name as keyof FormData]}
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
                formData={isModalData}
                onClose={() => setIsModalVisible(false)}
            />
        </>
    );
};

export default BasicForm;
