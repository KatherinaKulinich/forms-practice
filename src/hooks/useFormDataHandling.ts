import { useEffect, useState } from 'react';
import { validateValues } from '../helpers/validation';
import { FormData, FormErrors } from '../types/FormData';

export const useFormDataHandling = (
    formData: FormData,
    isActiveForm: boolean
) => {
    const initialErrorValues: FormErrors = {
        userName: null,
        userSurname: null,
        userCity: null,
        userCountry: null,
        userEmail: null,
        userAge: null
    };
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>(initialErrorValues);

    const onSubmitFormData: React.FormEventHandler<HTMLFormElement> = (
        event
    ) => {
        event.preventDefault();
        setErrors(validateValues(formData));
        setIsFormSubmitting(true);
    };

    useEffect(() => {
        if (isActiveForm && isFormSubmitting) {
            setErrors(validateValues(formData));
            return;
        }
        // setIsFormSubmitting(false);
    }, [formData, isActiveForm, isFormSubmitting]);

    const clearErrorMessages = () => {
        setErrors(initialErrorValues);
    };

    return {
        onSubmitFormData,
        errors,
        isFormSubmitting,
        setIsFormSubmitting,
        clearErrorMessages
    };
};
