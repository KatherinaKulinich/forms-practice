import { useEffect, useState } from 'react';
import { useConfettiActivating } from '../../hooks/useConfettiActivating';
import { useFormDataHandling } from '../../hooks/useFormDataHandling';
import { FormData } from '../../types/FormData';
import { initialValues, inputsData } from '../../utils/inputsData';
import ConfettiEffect from '../ConfettiEffect';
import Field from '../Field';
import Form from '../Form';
import ModalFormIsFinished from '../modals/ModalFormIsFinished';

const BasicForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>(initialValues);
    const [isModalData, setIsModalData] = useState<FormData>({} as FormData);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const {
        isConfetti,
        isModalVisible,
        onFormFinished,
        getConfettiEffect,
        closeModal
    } = useConfettiActivating();

    const {
        errors,
        onSubmitFormData,
        isFormSubmitting,
        clearErrorMessages,
        setIsFormSubmitting
    } = useFormDataHandling(formData, isFocus);

    const onChangeFormData: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setIsFocus(true);
        const value = event.target.value;
        const name = event.target.name;

        setFormData((current) => {
            return {
                ...current,
                [name]: value
            };
        });
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
            getConfettiEffect(errors);
            setIsModalData(formData);
        }
    }, [isSuccess, isFormSubmitting]);

    const isButtonDisabled = Object.values(formData).every((key) => key === '');
    const finishConfettiAnimation = () => {
        onFormFinished();
        setTimeout(() => {
            setFormData(initialValues);
            clearErrorMessages();
        }, 2000);
    };

    const onInputBlur = () => {
        setIsFocus(false);
        setIsFormSubmitting(false);
    };

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
                        onBlur={onInputBlur}
                    />
                ))}
            </Form>

            {isConfetti && (
                <ConfettiEffect offTheEffect={finishConfettiAnimation} />
            )}
            <ModalFormIsFinished
                isVisible={isModalVisible}
                formData={isModalData}
                onClose={closeModal}
            />
        </>
    );
};

export default BasicForm;
