import { useCallback, useEffect, useState } from 'react';
import { validateValues } from '../helpers/validateValues';
import { FormData } from '../types/FormData';

export const useFormHandlers = (initialFormValues: FormData) => {
    const [formData, setFormData] = useState<FormData>(initialFormValues);
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    // const [isFocus, setIsFocus] = useState<boolean>(false);

    const [errors, setErrors] = useState<Partial<FormData>>({});

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

            const newErrors = validateValues({
                ...formData,
                [name]: value
            });
            setErrors(newErrors);
        },
        [formData]
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
        setIsFormSubmitting(true);

        setErrors(validateValues(formData));
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
