import { useCallback, useEffect, useState } from 'react';
import { validateField } from '../helpers/validateField';
import { validateValues } from '../helpers/validateValues';
import { FormData } from '../types/FormData';

export const useFormHandlers = (initialFormValues: FormData) => {
    const [formData, setFormData] = useState<FormData>(initialFormValues);
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    // const [isFocus, setIsFocus] = useState<boolean>(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

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

            // setIsFocus(true);
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

    const onInputBlur = useCallback(() => {
        // setIsFocus(false);
        setIsFormSubmitting(false);
    }, []);

    useEffect(() => {
        const errorsChecking = Object.values(errors).every(
            (key) => key === null
        );

        setIsSuccess(errorsChecking);
    }, [errors, isFormSubmitting]);

    const onSubmitFormData = (event: React.FormEvent) => {
        event.preventDefault();
        setErrors(validateValues(formData));

        if (Object.keys(errors).length === 0 && isSuccess) {
            setIsFormSubmitting(true);
        }
    };

    const clearForm = () => {
        setFormData(initialFormValues);
        setErrors({});
    };

    return {
        formData,
        errors,
        // isFocus,
        isSuccess,
        isFormSubmitting,
        onChangeFormData,
        onSubmitFormData,
        onInputBlur,
        clearForm
    };
};
