import { FormData } from '../types/FormData';
import { inputsData } from '../utils/inputsData';
import { validateField } from './validateField';

export const validateValues = (data: Partial<FormData>) => {
    const errors: Partial<FormData> = {};

    inputsData.forEach((input) => {
        const name = input.name as keyof FormData;
        const value = data[name]?.trim() || '';

        const fieldErrors = validateField(name, value);

        if (fieldErrors) {
            errors[name] = fieldErrors;
        }
    });

    return errors;
};
