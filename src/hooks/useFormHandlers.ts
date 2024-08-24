import { useCallback, useEffect, useState } from 'react';
import { validateField } from '../helpers/validateField';
import { validateValues } from '../helpers/validateValues';
import { FormData } from '../types/FormData';

export const useFormHandlers = (initialFormValues: FormData) => {
    const [formData, setFormData] = useState<FormData>(initialFormValues);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const validateFieldHandler = useCallback(
        (name: keyof FormData, value: string) => {
            const fieldError = validateField(name, value);
            console.log('err', fieldError);
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: typeof fieldError === 'string' ? fieldError : ''
            }));
        },
        []
    );

    const onChangeFormData = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;

            setFormData((current) => {
                return {
                    ...current,
                    [name]: value
                };
            });

            validateFieldHandler(name as keyof FormData, value);
        },
        []
    );

    useEffect(() => {
        const errorsChecking = Object.values(errors).every(
            (key) => key === null || key === ''
        );

        setIsSuccess(errorsChecking);
    }, [errors]);

    const onSubmitFormData = (event: React.FormEvent) => {
        event.preventDefault();

        setErrors(validateValues(formData));
        setIsFormSubmitting(true);
    };

    const clearForm = () => {
        setFormData(initialFormValues);
        setErrors({});
        setIsFormSubmitting(false);
        setIsSuccess(false);
    };

    return {
        formData,
        errors,
        isSuccess,
        isFormSubmitting,
        onChangeFormData,
        onSubmitFormData,
        clearForm
    };
};
