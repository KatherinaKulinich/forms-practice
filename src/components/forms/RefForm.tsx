import { useEffect, useState } from 'react';
import { validateValues } from '../../helpers/validateValues';
import { useConfettiActivating } from '../../hooks/useConfettiActivating';
import { FormData } from '../../types/FormData';
import { initialValues, inputsData } from '../../utils/inputsData';
import { inputsRefs } from '../../utils/inputsRefs';
import ConfettiEffectContainer from '../ConfettiEffectContainer';
import Field from '../Field';
import Form from '../Form';
import ModalFormIsFinished from '../modals/ModalFormIsFinished';

const RefForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>(initialValues);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const {
        isConfetti,
        isModalVisible,
        onFormFinished,
        getConfettiEffect,
        closeModal
    } = useConfettiActivating();

    const onSubmitFormData: React.FormEventHandler<HTMLFormElement> = (
        event
    ) => {
        event.preventDefault();
        const data: FormData = inputsRefs.reduce(
            (o, key) =>
                Object.assign(o, { [key.input]: key.ref.current?.value }),
            {} as FormData
        );
        setErrors(validateValues(data));
        setIsFormSubmitting(true);

        setFormData(data);
    };

    useEffect(() => {
        const errorsChecking = Object.values(errors).every(
            (key) => key === null || key === ''
        );
        setIsSuccess(errorsChecking);
    }, [errors]);

    useEffect(() => {
        if (isSuccess && isFormSubmitting) {
            getConfettiEffect(errors);
        }
    }, [isSuccess, isFormSubmitting, formData, errors]);

    const finishConfettiAnimation = () => {
        onFormFinished();

        setTimeout(() => {
            setFormData(initialValues);
            setErrors({});
            setIsFormSubmitting(false);
            setIsSuccess(false);
        }, 2000);
    };

    return (
        <>
            <Form
                formTitle='Uncontrolled Form'
                formSubTitle='with ref and custom validation'
                onSubmitForm={onSubmitFormData}
            >
                {inputsData?.map((data) => {
                    return inputsRefs?.map((refItem) => {
                        if (data.name === refItem.input)
                            return (
                                <Field
                                    key={data.name}
                                    type={data.type}
                                    name={data.name}
                                    labelText={data.label}
                                    placeholder={data.placeholder}
                                    isErrorMessage={
                                        !!errors[data.name as keyof FormData]
                                    }
                                    message={
                                        errors[data.name as keyof FormData] ||
                                        ''
                                    }
                                    ref={refItem.ref}
                                />
                            );
                    });
                })}
            </Form>

            <ConfettiEffectContainer
                isConfetti={isConfetti}
                finishConfettiEffect={finishConfettiAnimation}
            />
            <ModalFormIsFinished
                isVisible={isModalVisible}
                formData={formData}
                onClose={closeModal}
            />
        </>
    );
};

export default RefForm;
