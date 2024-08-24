import { useEffect, useState } from 'react';
import { useConfettiActivating } from '../../hooks/useConfettiActivating';
import { useFormHandlers } from '../../hooks/useFormHandlers';
import { FormData } from '../../types/FormData';
import { initialValues, inputsData } from '../../utils/inputsData';
import ConfettiEffectContainer from '../ConfettiEffectContainer';
import Field from '../Field';
import Form from '../Form';
import ModalFormIsFinished from '../modals/ModalFormIsFinished';

const BasicForm: React.FC = () => {
    const [isModalData, setIsModalData] = useState<FormData>({} as FormData);

    const {
        formData,
        errors,
        isSuccess,
        onChangeFormData,
        onSubmitFormData,
        isFormSubmitting,
        clearForm
    } = useFormHandlers(initialValues);

    const {
        isConfetti,
        isModalVisible,
        onFormFinished,
        getConfettiEffect,
        closeModal
    } = useConfettiActivating();

    useEffect(() => {
        if (isSuccess && isFormSubmitting) {
            getConfettiEffect(errors);
            setIsModalData(formData);
        }
    }, [isSuccess, isFormSubmitting, formData, errors]);

    const finishConfettiAnimation = () => {
        onFormFinished();
        setTimeout(clearForm, 2000);
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
                        isErrorMessage={Boolean(
                            errors[data.name as keyof FormData]
                        )}
                        message={errors[data.name as keyof FormData] || ''}
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
