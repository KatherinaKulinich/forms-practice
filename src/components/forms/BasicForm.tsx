import { useCallback, useEffect, useState } from 'react';
import { useConfettiActivating } from '../../hooks/useConfettiActivating';
import { useFormHandlers } from '../../hooks/useFormHandlers';
import { FormData } from '../../types/FormData';
import { initialValues, inputsData } from '../../utils/inputsData';
import ConfettiEffectContainer from '../ConfettiEffectContainer';
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
    } = useFormHandlers(formData, isFocus);

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

        setIsSuccess(errorsChecking);
    }, [errors, isFormSubmitting]);

    useEffect(() => {
        if (isSuccess && isFormSubmitting) {
            getConfettiEffect(errors);
            setIsModalData(formData);
        }
    }, [isSuccess, isFormSubmitting]);

    const isButtonDisabled = Object.values(formData).every((key) => key === '');

    const finishConfettiAnimation = useCallback(() => {
        onFormFinished();

        setTimeout(() => {
            setFormData(initialValues);
            clearErrorMessages();
        }, 2000);
    }, [onFormFinished, clearErrorMessages]);

    const onInputBlur = useCallback(() => {
        setIsFocus(false);
        setIsFormSubmitting(false);
    }, [setIsFormSubmitting]);

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
                        message={errors[data.name as keyof FormData] || ''}
                        onBlur={onInputBlur}
                    />
                ))}
            </Form>

            <ConfettiEffectContainer
                isConfetti={isConfetti}
                finishConfettiEffect={finishConfettiAnimation}
            />
            <ModalFormIsFinished
                isVisible={isModalVisible}
                formData={isModalData}
                onClose={closeModal}
            />
        </>
    );
};

export default BasicForm;
